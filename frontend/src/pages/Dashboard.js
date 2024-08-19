import React, { useState, useEffect } from 'react';
import {
    Box, Heading, Text, SimpleGrid, Button, Table, Thead, Tbody, Tr, Th, Td,
    useToast, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { fetchWebsiteData, viewTranslatedWebsite, deleteWebsiteData } from '../api/dashboardAPI'; // Import API functions

const token = localStorage.getItem('token');

// Define the languages array
const languages = [
    { code: 'hi', label: 'Hindi' },
    { code: 'as', label: 'Assamese' },
    { code: 'bn', label: 'Bengali' },
    { code: 'gu', label: 'Gujarati' },
    { code: 'kn', label: 'Kannada' },
    { code: 'ml', label: 'Malayalam' },
    { code: 'mr', label: 'Marathi' },
    { code: 'or', label: 'Odia' },
    { code: 'pa', label: 'Punjabi' },
    { code: 'ta', label: 'Tamil' },
    { code: 'te', label: 'Telugu' },
    { code: 'en', label: 'English' }
];

// Create a lookup object for language codes
const languageLookup = languages.reduce((acc, lang) => {
    acc[lang.code] = lang.label;
    return acc;
}, {});

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const location = useLocation(); // Get the location object from React Router

    // Extract userId from query parameters
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');

    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                try {
                    const data = await fetchWebsiteData(userId);  // Use the API function
                    setData(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            } else {
                setError('User ID is required');
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);  // Re-fetch data if userId changes

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error}</Text>;

    const handleView = async (item) => {
        try {
            const htmlContent = await viewTranslatedWebsite(item.userId, item.url); // Use the API function

            // Open a new tab and write the HTML content
            const newWindow = window.open('', '_blank');
            newWindow.document.write(htmlContent);
            newWindow.document.close(); // Ensure the content is fully loaded

            // Disable content editing after the document is fully loaded
            newWindow.document.addEventListener('DOMContentLoaded', () => {
                const textNodes = newWindow.document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a');
                textNodes.forEach(node => {
                    node.contentEditable = false; // Disable editing
                });
            });
        } catch (error) {
            console.error('Error viewing the translated website:', error);
            alert('An error occurred while trying to view the translated website.');
        }
    };

    const handleExport = (item) => {
        const csvData = [
            ['URL', 'Language', 'Edited HTML', 'Translated HTML'], // CSV headers
            [item.url, languageLookup[item.language] || item.language, item.editedHTML, item.translatedHTML]
        ];

        // Convert the array to a CSV string
        const csvContent = csvData.map(e => e.map(cell => `"${cell}"`).join(",")).join("\n");

        // Create a Blob from the CSV string
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        // Create a link element and trigger a download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${item.url}_data.csv`); // CSV file name
        document.body.appendChild(link);
        link.click();

        // Clean up and remove the link
        document.body.removeChild(link);
    };

    const handleDelete = async () => {
        try {
            if (inputValue.trim().toLowerCase() === 'delete') {
                await deleteWebsiteData(deleteId, token);  // Use the API function

                setData(data.filter(item => item._id !== deleteId));

                toast({
                    title: 'Deletion successful.',
                    description: 'The item has been deleted.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
                onClose();
            } else {
                toast({
                    title: 'Invalid input',
                    description: 'Please type "delete" to confirm.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: 'Deletion failed.',
                description: `Error: ${error.message}`,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const openConfirmDialog = (id) => {
        setDeleteId(id);
        onOpen();
    };

    return (
        <Box p={8}>
            {/* Header */}
            <Heading as="h1" size="2xl" mb={6} textAlign="center">
                Dashboard
            </Heading>

            {/* Introduction or Welcome Text */}
            <Text fontSize="xl" textAlign="center" mb={10}>
                Welcome to your dashboard! Here you can manage your settings, view analytics, and more.
            </Text>

            {/* Example Sections */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                    <Heading fontSize="xl">Profile Overview</Heading>
                    <Text mt={4}>
                        Manage your profile information, update details, and view your recent activity.
                    </Text>
                    <Button colorScheme="orange" mt={4}>Go to Profile</Button>
                </Box>

                <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                    <Heading fontSize="xl">Analytics</Heading>
                    <Text mt={4}>
                        View your usage analytics, track performance, and monitor your progress.
                    </Text>
                    <Button colorScheme="orange" mt={4}>View Analytics</Button>
                </Box>

                <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
                    <Heading fontSize="xl">Settings</Heading>
                    <Text mt={4}>
                        Customize your experience, manage preferences, and adjust your settings.
                    </Text>
                    <Button colorScheme="orange" mt={4}>Go to Settings</Button>
                </Box>
            </SimpleGrid>

            {/* Data Table */}
            <Box mt={10}>
                <Heading as="h2" size="lg" mb={4}>Website Data</Heading>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>URL</Th>
                            <Th>Language</Th>
                            <Th>Content</Th>
                            <Th>Actions</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <Tr key={item._id}>
                                    <Td>{item.url.substring(0, 30) + '...'}</Td>
                                    <Td>{languageLookup[item.language] || item.language}</Td>
                                    <Td>
                                        {item.editedHTML ?
                                            (item.editedHTML.substring(0, 50) + '...') :
                                            (item.translatedHTML.substring(0, 50) + '...')}
                                    </Td>
                                    <Td>
                                        <Button colorScheme="blue" size="sm" mr={2} mb={2} onClick={() => handleView(item)}>View</Button>
                                        <Button colorScheme="green" size="sm" mr={2} mb={2} onClick={() => handleExport(item)}>Export</Button>
                                    </Td>
                                    <Td>
                                        <Button colorScheme="red" size="sm" onClick={() => openConfirmDialog(item._id)}>Delete</Button>
                                    </Td>
                                </Tr>
                            ))
                        ) : (
                            <Tr>
                                <Td colSpan="5" textAlign="center">No data available</Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </Box>

            {/* Confirmation Dialog */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader alignContent={'flex-start'}>Confirm Deletion</ModalHeader>
                    <ModalBody>
                        <Text mb={4}>Are you sure you want to delete this item? This action cannot be undone.</Text>
                        <Input 
                            placeholder='Type "delete" to confirm'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={handleDelete}>Delete</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Dashboard;
