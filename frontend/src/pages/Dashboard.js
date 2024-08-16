import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Button, Table, Thead, Tbody, Tr, Th, Td, useToast } from '@chakra-ui/react';
import axios from 'axios';

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
    const toast = useToast();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/website-view');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleView = (item) => {
        // Implement view logic, e.g., open a modal or redirect to a detailed page
        console.log('View item:', item);
        toast({
            title: 'View action triggered',
            description: `Viewing item with URL: ${item.url}`,
            status: 'info',
            duration: 3000,
            isClosable: true,
        });
    };

    const handleExport = (item) => {
        // Implement export logic, e.g., generate a download link
        const blob = new Blob([item.translatedHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `export-${item.url}.html`;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        toast({
            title: 'Export successful',
            description: `Exported item with URL: ${item.url}`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    const handleEdit = (item) => {
        // Implement edit logic, e.g., open a modal or navigate to an edit page
        console.log('Edit item:', item);
        toast({
            title: 'Edit action triggered',
            description: `Editing item with URL: ${item.url}`,
            status: 'warning',
            duration: 3000,
            isClosable: true,
        });
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/website-view/${id}`);
            setData(data.filter(item => item._id !== id));
            toast({
                title: 'Delete successful',
                description: `Deleted item with ID: ${id}`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (err) {
            toast({
                title: 'Delete failed',
                description: err.message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error: {error}</Text>;

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
                        {data.map((item) => (
                            <Tr key={item._id}>
                                <Td>{item.url}</Td>
                                <Td>{languageLookup[item.language] || item.language}</Td> {/* Map code to label */}
                                <Td>
                                    {item.editedHTML ?
                                        (item.editedHTML.substring(0, 50) + '...') :
                                        (item.translatedHTML.substring(0, 50) + '...')}
                                </Td>
                                <Td>
                                    <Button colorScheme="blue" size="sm" mr={2} onClick={() => handleView(item)}>View</Button>
                                    <Button colorScheme="green" size="sm" mr={2} onClick={() => handleExport(item)}>Export</Button>
                                    <Button colorScheme="yellow" size="sm" mr={2} onClick={() => handleEdit(item)}>Edit</Button>
                                </Td>

                                    <Td>
                                        <Button colorScheme="red" size="sm" onClick={() => handleDelete(item._id)}>Delete</Button>
                                    </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
        </Box>
    );
};

export default Dashboard;
