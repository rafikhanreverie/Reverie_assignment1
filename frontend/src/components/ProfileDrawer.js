import React from 'react';
import {
    Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,
    DrawerContent, DrawerCloseButton, Button, Avatar, Text, Stack, Heading
} from '@chakra-ui/react';

const ProfileDrawer = ({ isOpen, onClose, btnRef, userData, logout }) => {


    const handleDashboardClick = () => {
        const dashboardUrl = `/dashboard?userId=${encodeURIComponent(userData._id)}`;
        window.open(dashboardUrl, '_blank'); // Open the dashboard with userId in a new tab
    };


    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Profile Details</DrawerHeader>

                <DrawerBody>
                    {userData ? (
                        <div className="profile-drawer">
                            <Stack spacing={5} align="center">
                                <Avatar size="xl" name={userData.name} src={userData.picture} />
                                <Heading as="h1" size="lg">
                                    {userData.name}
                                </Heading>
                                <Text fontSize="lg" color="gray.600">
                                    {userData.email}
                                </Text>
                            </Stack>

                            <button className='logout-button' onClick={logout}>Logout</button>
                        </div>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                    <Button colorScheme='orange' variant='outline' mt='8' width='100%' onClick={handleDashboardClick}>
                        Dashboard
                    </Button>
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default ProfileDrawer;
