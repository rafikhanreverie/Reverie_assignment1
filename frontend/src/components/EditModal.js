// // src/components/EditTranslationModal.js

// import React, { useState, useEffect } from 'react';
// import {
//   Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
//   Button, Input, Table, Thead, Tbody, Tr, Th, Td, useToast, Box
// } from '@chakra-ui/react';
// import { fetchTextDictionary, updateTextDictionary } from '../api/dashboardAPI'; // API functions

// const EditTranslationModal = ({ isOpen, onClose, item, userId }) => {
//   const [dictionary, setDictionary] = useState([]);
//   const toast = useToast();

//   useEffect(() => {
//     if (isOpen && item) {
//       const fetchDictionary = async () => {
//         try {
//           const response = await fetchTextDictionary(userId, item.url, item.language);
//           setDictionary(response.dictionary);
//         } catch (error) {
//           toast({
//             title: 'Error fetching data',
//             description: error.message,
//             status: 'error',
//             duration: 5000,
//             isClosable: true,
//           });
//         }
//       };

//       fetchDictionary();
//     }
//   }, [isOpen, item, userId, toast]);

//   const handleSave = async () => {
//     try {
//       await updateTextDictionary(userId, item.url, item.language, dictionary);
//       toast({
//         title: 'Translation updated',
//         description: 'Your changes have been saved.',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//       onClose();
//     } catch (error) {
//       toast({
//         title: 'Error saving changes',
//         description: error.message,
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleChange = (index, value) => {
//     const updatedDictionary = [...dictionary];
//     updatedDictionary[index].value = value;
//     setDictionary(updatedDictionary);
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} size="6xl">
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Edit Translation</ModalHeader>
//         <ModalBody>
//           <Box overflowY="auto" maxHeight="60vh">
//             <Table variant="simple">
//               <Thead>
//                 <Tr>
//                   <Th>Original Text</Th>
//                   <Th>Machine Generated Text</Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {dictionary.map((entry, index) => (
//                   <Tr key={index}>
//                     <Td maxWidth="400px" wordBreak="break-word">
//                       {entry.key}
//                     </Td>
//                     <Td>
//                       <Input
//                         value={entry.value}
//                         onChange={(e) => handleChange(index, e.target.value)}
//                         width="100%"
//                       />
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>
//           </Box>
//         </ModalBody>
//         <ModalFooter>
//           <Button colorScheme="blue" onClick={handleSave}>
//             Save
//           </Button>
//           <Button onClick={onClose} ml={3}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default EditTranslationModal;
import React, { useState, useEffect } from 'react';
import {
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Button, Table, Thead, Tbody, Tr, Th, Td, useToast, Box, Text
} from '@chakra-ui/react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import { fetchTextDictionary, updateTextDictionary } from '../api/dashboardAPI';
import Draggable from 'react-draggable';
import { Switch } from 'antd';
import "../styles/editModal.css";
import TestSwalekh from './TestSwalekh';

const EditTranslationModal = ({ isOpen, onClose, item, userId }) => {
  const [dictionary, setDictionary] = useState([]);
  const [selectedInputIndex, setSelectedInputIndex] = useState(null);
  const [lang, setLang] = useState('hi');
  const [mode, setMode] = useState('phonetic');
  const [isChecked, setIsChecked] = useState(false);
  const [layoutName, setLayoutName] = useState('default');
  const toast = useToast();

  // Handle switch change
  const handleSwitchChange = (checked) => {
    setIsChecked(checked);
  };

  // Handle input text change
  const handleChange = (index, value) => {
    const updatedDictionary = [...dictionary];
    updatedDictionary[index].value = value;
    setDictionary(updatedDictionary);
  };

  // Fetch dictionary data
  const fetchDictionary = async () => {
    if (!item) return;

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

  // Initialize Swalekh and fetch dictionary data on open
  useEffect(() => {
    if (isOpen && item) {
      fetchDictionary();

      const initializeSwalekh = () => {
        if (window.loadSwalekh) {
          window.loadSwalekh({
            apiKey: "172c5bb5af18516905473091fd58d30afe740b3f",
            appId: "rev.transliteration",
            querySel: ".swalekh-t13n",
            lang: item.language,
            domain: '1',
            mode: 'phonetic',
          });
        } else {
          console.error("Swalekh Web plugin not found or failed to initialize.");
        }
      };

      initializeSwalekh();

      return () => {
        if (window.unloadSwalekh) {
          window.unloadSwalekh({ querySel: ".swalekh-t13n" });
        }
      };
    }
  }, [isOpen, item, userId]);

  // Save changes to dictionary
  const handleSave = async () => {
    if (!item) return;

    try {
      await updateTextDictionary(userId, item.url, item.language, dictionary);

      // Re-fetch the updated dictionary after saving
      await fetchDictionary();

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

  // Handle key press on keyboard
  const handleKeyPress = (key) => {
    if (selectedInputIndex !== null) {
      let currentValue = dictionary[selectedInputIndex].value || '';

      switch (key) {
        case "{bksp}":
          currentValue = currentValue.slice(0, -1);
          break;
        case "{space}":
          currentValue += " ";
          break;
        case "{enter}":
          currentValue += "\n";
          break;
        case '{shift}':
        case '{lock}':
          setLayoutName(layoutName === 'default' ? 'shift' : 'default');
          break;
        default:
          currentValue += key;
          break;
      }

      handleChange(selectedInputIndex, currentValue);
    }
  };

  // Return null if item is not defined
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader justifyContent="space-between" width="100%" alignItems="center">
          <Text>Edit Translation</Text>
          <Box display="flex" alignItems="center">
            <Text>Keyboard</Text>
            <Switch
              checked={isChecked}
              onChange={handleSwitchChange}
              size="large"
              className={`custom-switch ${isChecked ? 'checked' : ''}`}
            />
          </Box>
        </ModalHeader>
        <ModalBody>
          <Box overflowY="auto" maxHeight="60vh">
            <Table variant="unstyled">
              <Thead>
                <Tr>
                  <Th>Original Text</Th>
                  <Th>Machine Generated Text</Th>
                  <Th>Input Text</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dictionary.map((entry, index) => (
                  <Tr
                    key={index}
                    onClick={() => setSelectedInputIndex(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <Td maxWidth="400px" wordBreak="break-word">
                      {entry.key}
                    </Td>
                    <Td maxWidth="400px" wordBreak="break-word">
                      {entry.value}
                    </Td>
                    <Td>
                      <TestSwalekh
                        index={index}
                        input={entry.value}
                        onInputChange={handleChange}
                        language={item.language}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {isChecked && (
            <Draggable>
              <div className="keyboard-container">
                <Keyboard
                  className="body-container"
                  onKeyPress={handleKeyPress}
                  layoutName={layoutName}
                />
              </div>
            </Draggable>
          )}
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
