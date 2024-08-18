import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Button, Table, Thead, Tbody, Tr, Th, Td, useToast } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook

import axios from 'axios';
const token =  localStorage.getItem('authToken');
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

    const location = useLocation(); // Get the location object from React Router

    // Extract userId from query parameters
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');
    useEffect(() => {
        const fetchData = async () => {
            if (userId) {
                try {
                    const response = await axios.get('http://localhost:3001/api/website-view', {
                        params: { userId }  // Pass userId as a query parameter
                    });
                    setData(response.data);
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


    const handleView = (item) => {
        const htmlContent = item.editedHTML || item.translatedHTML;
        const newWindow = window.open('', '_blank');
        newWindow.document.write(htmlContent);
        newWindow.document.close(); // Ensures the content is fully loaded
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
    

    const handleEdit = (item) => {
        window.open(`/edit-page?url=${encodeURIComponent(item.url)}&lang=${item.language}`, '_blank');
    };

    const handleDelete = async (id) => {
        
            toast({
                title: 'Deletion successful.',
                description: 'The item has been deleted.',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        
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
