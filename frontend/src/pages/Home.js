
// import React, { useState, useEffect,useRef,useContext } from 'react';
// import { extractAndTranslateText } from '../api/translate';
// import '../styles/home.css';
// import { AuthContext } from '../context/AuthContext';

// const Home = () => {
//     const { logout } = useContext(AuthContext);
//     const [url, setUrl] = useState('');
//     const [language, setLanguage] = useState('');
//     const [translatedHTML, setTranslatedHTML] = useState('');
//     const [error, setError] = useState('');

//     const languages = [
//         { code: 'hi', label: 'Hindi' },
//         { code: 'as', label: 'Assamese' },
//         { code: 'bn', label: 'Bengali' },
//         { code: 'gu', label: 'Gujarati' },
//         { code: 'kn', label: 'Kannada' },
//         { code: 'ml', label: 'Malayalam' },
//         { code: 'mr', label: 'Marathi' },
//         { code: 'or', label: 'Odia' },
//         { code: 'pa', label: 'Punjabi' },
//         { code: 'ta', label: 'Tamil' },
//         { code: 'te', label: 'Telugu' },
//         { code: 'en', label: 'English' }
//     ];


//     const alertShown=useRef(false);
//     // Detect user's browser language and set it as the default language
//     useEffect(() => {
//         if(!alertShown.current){
//         // console.log('useEffect is running');
//         const browserLanguage = navigator.language.split('-')[0]; // Extract the language code
//         // console.log("Selected Language",browserLanguage)
//         const defaultLanguage = languages.find(lang => lang.code === browserLanguage) ? browserLanguage : 'en';
//         const languageLabel=languages.find(lang =>lang.code === defaultLanguage)?.label ||'English';
//         setLanguage(defaultLanguage);
//         alert(`Your Browser  Language is ${languageLabel}`)
//         alertShown.current=true;
// }
//     }, []);


//     const onSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await extractAndTranslateText(url, language);
//             setTranslatedHTML(data.translatedHTML);
//             setError('');
//         } catch (err) {
//             setError(err.message);
//             setTranslatedHTML('');
//         }
//     };

//     return (
//         <>
//             <div className="home-container">
//                 <button className='logout-button' onClick={logout}>Logout</button>

//                  {/* Logout button */}
//                 <form onSubmit={onSubmit}>
//                     <div>
//                         <label htmlFor="url">Website URL:</label>
//                         <input
//                             type="text"
//                             id="url"
//                             value={url}
//                             onChange={(e) => setUrl(e.target.value)}
//                             placeholder="Enter website URL"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="language">Select Language:</label>
//                         <select
//                             id="language"
//                             value={language}
//                             onChange={(e) => setLanguage(e.target.value)}
//                             required
//                         >
//                             <option value="" disabled>Select a language</option>
//                             {languages.map((lang) => (
//                                 <option key={lang.code} value={lang.code}>
//                                     {lang.label}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>
//                     <button id="btn-submit" type="submit">Submit</button>
//                 </form>

//                 {error && <div className="error-message">{error}</div>}
//                 {translatedHTML && (
//                     <div className="iframe-container">
//                         <h2>Translated Page:</h2>
//                         <iframe
//                             srcDoc={translatedHTML}
//                             title="Translated Page"
//                             width="100%"
//                             height="500px"
//                             style={{ border: 'none', marginTop: '20px' }}
//                         />
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default Home;
// src/pages/Home.js
// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { extractAndTranslateText } from '../api/translate';
// import { AuthContext } from '../context/AuthContext';
// import { Button, Box, Avatar, Text, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Heading, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input, useDisclosure } from '@chakra-ui/react';
// import { FaUser } from 'react-icons/fa';
// import '../styles/home.css';
// import axios from 'axios';

// const Home = () => {
//     const { logout } = useContext(AuthContext);
//     const [url, setUrl] = useState('');
//     const [language, setLanguage] = useState('');
//     const [translatedHTML, setTranslatedHTML] = useState('');
//     const [error, setError] = useState('');
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const btnRef = useRef();
//     const token = localStorage.getItem('authToken');
//     const [userData, setUserData] = useState(null);
//     const [sliderValue, setSliderValue] = useState(50); // Example slider state

//     const languages = [
//         { code: 'hi', label: 'Hindi' },
//         { code: 'as', label: 'Assamese' },
//         { code: 'bn', label: 'Bengali' },
//         { code: 'gu', label: 'Gujarati' },
//         { code: 'kn', label: 'Kannada' },
//         { code: 'ml', label: 'Malayalam' },
//         { code: 'mr', label: 'Marathi' },
//         { code: 'or', label: 'Odia' },
//         { code: 'pa', label: 'Punjabi' },
//         { code: 'ta', label: 'Tamil' },
//         { code: 'te', label: 'Telugu' },
//         { code: 'en', label: 'English' }
//     ];

//     const alertShown = useRef(false);

//     useEffect(() => {
//         if (!alertShown.current) {
//             const browserLanguage = navigator.language.split('-')[0];
//             const defaultLanguage = languages.find(lang => lang.code === browserLanguage) ? browserLanguage : 'en';
//             const languageLabel = languages.find(lang => lang.code === defaultLanguage)?.label || 'English';
//             setLanguage(defaultLanguage);
//             alert(`Your Browser Language is ${languageLabel}`);
//             alertShown.current = true;
//         }
//     }, []);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3001/api/users/getUser', {
//                     headers: {
//                         'Authorization': `Bearer ${token}`
//                     }
//                 });
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, [token]);

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const data = await extractAndTranslateText(url, language);
//             setTranslatedHTML(data.translatedHTML);
//             setError('');
//         } catch (err) {
//             setError(err.message);
//             setTranslatedHTML('');
//         }
//     };

//     return (
//         <div className="home-container">
//             <div className="header">

//                 <Button ref={btnRef} onClick={onOpen} className="logout-button" leftIcon={<FaUser />}>
//                     Profile
//                 </Button>
//             </div>

//             <form onSubmit={onSubmit}>
//                 <div>
//                     <label htmlFor="url">Website URL:</label>
//                     <input
//                         type="text"
//                         id="url"
//                         value={url}
//                         onChange={(e) => setUrl(e.target.value)}
//                         placeholder="Enter website URL"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="language">Select Language:</label>
//                     <select
//                         id="language"
//                         value={language}
//                         onChange={(e) => setLanguage(e.target.value)}
//                         required
//                     >
//                         <option value="" disabled>Select a language</option>
//                         {languages.map((lang) => (
//                             <option key={lang.code} value={lang.code}>
//                                 {lang.label}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <button id="btn-submit" type="submit">Submit</button>
//             </form>


//             {error && <div className="error-message">{error}</div>}
//             {translatedHTML && (
//                 <div className="iframe-container">
//                     <h2>Translated Page:</h2>
//                     <iframe
//                         srcDoc={translatedHTML}
//                         title="Translated Page"
//                         width="100%"
//                         height="500px"
//                         style={{ border: 'none', marginTop: '20px' }}
//                     />
//                 </div>
//             )}

//             <Drawer
//                 isOpen={isOpen}
//                 placement='right'
//                 onClose={onClose}
//                 finalFocusRef={btnRef}

//             >
//                 <DrawerOverlay />
//                 <DrawerContent >
//                     <DrawerCloseButton />
//                     <DrawerHeader>Profile Details</DrawerHeader>

//                     <DrawerBody >
//                         {userData ? (
//                             <div className="profile-drawer">
//                                 <Stack spacing={5} align="center">
//                                     <Avatar size="xl" name={userData.name} src={userData.picture} />
//                                     <Heading as="h1" size="lg">
//                                         {userData.name}
//                                     </Heading>
//                                     <Text fontSize="lg" color="gray.600">
//                       dfdf                  {userData.email}
//                                     </Text>
//                                 </Stack>

//                                 <button className='logout-button' onClick={logout}>Logout</button> 
//                             </div>
//                         ) : (
//                             <Text>Loading...</Text>
//                         )}
//                     </DrawerBody>

//                     <DrawerFooter>
//                         <Button variant='outline' mr={3} onClick={onClose}>
//                             Cancel
//                         </Button>

//                     </DrawerFooter>
//                 </DrawerContent>
//             </Drawer>
//         </div>
//     );
// };

// export default Home;

import React, { useState, useEffect, useRef, useContext } from 'react';
import { extractAndTranslateText } from '../api/translate';
import { AuthContext } from '../context/AuthContext';
import { Button, useDisclosure } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import '../styles/home.css';
import ProfileDrawer from '../components/ProfileDrawer';
import { saveEditedPage } from '../api/translate';
import { fetchUserData } from '../api/auth';
import axios from 'axios';

const Home = () => {
    const { logout } = useContext(AuthContext);
    const [url, setUrl] = useState('');
    const [language, setLanguage] = useState('');
    const [translatedHTML, setTranslatedHTML] = useState('');
    const [error, setError] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const iframeRef = useRef(null); // Create a ref for the iframe
    const token = localStorage.getItem('authToken');
    const [userData, setUserData] = useState(null);

    const [editMode, setEditMode] = useState(false); // Toggle for edit mode

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

    const alertShown = useRef(false);

    useEffect(() => {
        if (!alertShown.current) {
            const browserLanguage = navigator.language.split('-')[0];
            const defaultLanguage = languages.find(lang => lang.code === browserLanguage) ? browserLanguage : 'en';
            // const languageLabel = languages.find(lang => lang.code === defaultLanguage)?.label || 'English';
            setLanguage(defaultLanguage);
            // alert(`Your Browser Language is ${languageLabel}`);
            alertShown.current = true;
        }
    }, []);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const data = await fetchUserData();
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        getUserData();
    }, [token]);



    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await extractAndTranslateText(url, language);
            setTranslatedHTML(data.translatedHTML);
            setError('');
        } catch (err) {
            setError(err.message);
            setTranslatedHTML('');
        }
    };

    const enableLiveEdit = () => {
        if (iframeRef.current && iframeRef.current.contentDocument) {
            const iframeDoc = iframeRef.current.contentDocument;
            const textNodes = iframeDoc.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a, href');

            textNodes.forEach(node => {
                if (!editMode) {
                    node.contentEditable = !editMode;  // Toggle contentEditable based on edit mode
                    if (!editMode) {
                        node.addEventListener('mouseenter', () => {
                            node.style.outline = '2px solid #f05d0d'; // Highlight on hover in edit mode
                        });
                        node.addEventListener('mouseleave', () => {
                            node.style.outline = '';
                        });
                    } else {
                        node.removeEventListener('mouseenter', null);  // Remove highlight effect in view mode
                        node.removeEventListener('mouseleave', null);
                        node.style.outline = '';
                    }
                }
            });
        }

        setEditMode(!editMode);

    };

    const saveEdits = async () => {
        if (iframeRef.current && iframeRef.current.contentDocument) {
            const iframeDoc = iframeRef.current.contentDocument;
            const editedHTML = iframeDoc.documentElement.outerHTML;

            console.log("editedHTML", editedHTML);

            await saveEditedPage(url, language, editedHTML, token); // Use the refactored API
        }
    };

    const toggleEditMode = () => {
        if (editMode) {
            saveEdits();
        } else {
            enableLiveEdit();
        }
        // setEditMode(!editMode);
    };

    return (
        <div className="home-container">
            <div className="header">
                <Button ref={btnRef} onClick={onOpen} className="logout-button" leftIcon={<FaUser />}>
                    Profile
                </Button>
                <Button onClick={toggleEditMode} className="live-edit-button">
                    {editMode ? 'Save Edit' : 'Enable Live Edit'}
                </Button>
            </div>

            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="url">Website URL:</label>
                    <input
                        type="text"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter website URL"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="language">Select Language:</label>
                    <select
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select a language</option>
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button id="btn-submit" type="submit">Submit</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            {translatedHTML && (
                <div className="iframe-container">
                    <h2>Translated Page:</h2>
                    <iframe
                        ref={iframeRef}
                        srcDoc={translatedHTML}
                        title="Translated Page"
                        width="100%"
                        height="500px"
                        style={{ border: 'none', marginTop: '20px' }}
                    />
                </div>
            )}
            <ProfileDrawer
                isOpen={isOpen}
                onClose={onClose}
                btnRef={btnRef}
                userData={userData}
                logout={logout}
            />
        </div>
    );
};

export default Home;
