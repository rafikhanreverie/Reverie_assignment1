// src/components/EditTranslationModal.js

import React, { useState, useEffect } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, Input, Table, Thead, Tbody, Tr, Th, Td, useToast, Box
} from '@chakra-ui/react';
import { fetchTextDictionary, updateTextDictionary } from '../api/dashboardAPI'; // API functions

const EditTranslationModal = ({ isOpen, onClose, item, userId }) => {
  const [dictionary, setDictionary] = useState([]);
  const toast = useToast();

  useEffect(() => {
    if (isOpen && item) {
      const fetchDictionary = async () => {
        try {
          const response = await fetchTextDictionary(userId, item.url, item.language);
          setDictionary(response.dictionary);
        } catch (error) {
          toast({
            title: 'Error fetching data',
            description: error.message,
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      };

      fetchDictionary();
    }
  }, [isOpen, item, userId, toast]);

  const handleSave = async () => {
    try {
      await updateTextDictionary(userId, item.url, item.language, dictionary);
      toast({
        title: 'Translation updated',
        description: 'Your changes have been saved.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error saving changes',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleChange = (index, value) => {
    const updatedDictionary = [...dictionary];
    updatedDictionary[index].value = value;
    setDictionary(updatedDictionary);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Translation</ModalHeader>
        <ModalBody>
          <Box overflowY="auto" maxHeight="60vh">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Original Text</Th>
                  <Th>Machine Generated Text</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dictionary.map((entry, index) => (
                  <Tr key={index}>
                    <Td maxWidth="400px" wordBreak="break-word">
                      {entry.key}
                    </Td>
                    <Td>
                      <Input
                        value={entry.value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        width="100%"
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose} ml={3}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTranslationModal;
