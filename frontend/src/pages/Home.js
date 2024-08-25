// import React, { useState, useEffect, useRef, useContext } from 'react';
// import { extractAndTranslateText } from '../api/translate';
// import { AuthContext } from '../context/AuthContext';
// import { Button, HStack, useDisclosure,Heading } from '@chakra-ui/react';
// import { FaUser } from 'react-icons/fa';
// import '../styles/home.css';
// import ProfileDrawer from '../components/ProfileDrawer';
// import { saveEditedPage } from '../api/translate';
// import { fetchUserData } from '../api/auth';

// const Home = () => {
//     const { logout } = useContext(AuthContext);
//     const [url, setUrl] = useState('');
//     const [language, setLanguage] = useState('');
//     const [translatedHTML, setTranslatedHTML] = useState('');
//     const [error, setError] = useState('');
//     const { isOpen, onOpen, onClose } = useDisclosure();
//     const btnRef = useRef();
//     const iframeRef = useRef(null);
//     const [loading, setLoading] = useState(false);
//     const token = localStorage.getItem('authToken');
//     const [userData, setUserData] = useState(null);

//     const [editMode, setEditMode] = useState(false);

    // const languages = [
    //     { code: 'hi', label: 'Hindi' },
    //     { code: 'as', label: 'Assamese' },
    //     { code: 'bn', label: 'Bengali' },
    //     { code: 'gu', label: 'Gujarati' },
    //     { code: 'kn', label: 'Kannada' },
    //     { code: 'ml', label: 'Malayalam' },
    //     { code: 'mr', label: 'Marathi' },
    //     { code: 'or', label: 'Odia' },
    //     { code: 'pa', label: 'Punjabi' },
    //     { code: 'ta', label: 'Tamil' },
    //     { code: 'te', label: 'Telugu' },
    //     { code: 'en', label: 'English' }
    // ];

//     // const alertShown = useRef(false);

//     // useEffect(() => {
//     //     if (!alertShown.current) {
//     //         const browserLanguage = navigator.language.split('-')[0];
//     //         const defaultLanguage = languages.find(lang => lang.code === browserLanguage) ? browserLanguage : 'en';
//     //         setLanguage(defaultLanguage);
//     //         alertShown.current = true;
//     //     }
//     // }, []);

//     useEffect(() => {
//         const getUserData = async () => {
//             try {
//                 const data = await fetchUserData();
//                 setUserData(data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         getUserData();
//     }, [token]);

//     // const onSubmit = async (e) => {
//     //     e.preventDefault();
//     //     try {
//     //         if (userData && userData._id) {
//     //             const data = await extractAndTranslateText(url, language, userData._id);
//     //             setTranslatedHTML(data.translatedHTML);
//     //             setError('');
//     //         }
//     //     } catch (err) {
//     //         setError(err.message);
//     //         setTranslatedHTML('');
//     //     }
//     // };


//     const isValidUrl = (string) => {
//         try {
//           new URL(string);
//           return true;
//         } catch (err) {
//             console.log(err);
//           return false;
//         }
//       };
    
//       const handleSearch = async () => {
//         setError(null);
      
//         if (!isValidUrl(url)) {
//           setError('Please enter a valid URL.');
//           return;
//         }
      
//         setLoading(true);
      
//         try {
//           const response = await fetch('http://localhost:3001/api/textextract/extract-translate-text', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ url, language }),
//           });
      
//           const result = await response.json();
      
//           if (result.success) {
//             // Open the reversed content in the same tab to ensure script functionality
//             document.open();
//             document.write(result.content);
//             document.close();
//           } else {
//             setError(result.message);
//           }
//         } catch (error) {
//           console.error('Error:', error);
//           setError('A network error occurred. Please try again.');
//         } finally {
//           setLoading(false);
//         }
//       };

//     const enableLiveEdit = () => {
//         if (iframeRef.current && iframeRef.current.contentDocument) {
//             const iframeDoc = iframeRef.current.contentDocument;
//             const textNodes = iframeDoc.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a');

//             textNodes.forEach(node => {
//                 node.contentEditable = true;
//                 node.addEventListener('mouseenter', () => {
//                     node.style.outline = '2px solid #f05d0d';
//                 });
//                 node.addEventListener('mouseleave', () => {
//                     node.style.outline = '';
//                 });
//             });
//         }

//         setEditMode(true);
//     };

//     const saveEdits = async () => {
//         if (iframeRef.current && iframeRef.current.contentDocument) {
//             const iframeDoc = iframeRef.current.contentDocument;
//             const editedHTML = iframeDoc.documentElement.outerHTML;

//             await saveEditedPage(url, language, editedHTML, token);

//             // Disable editing after saving
//             const textNodes = iframeDoc.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a');

//             textNodes.forEach(node => {
//                 node.contentEditable = false;
//                 node.style.outline = ''; // Remove outline after editing
//                 node.removeEventListener('mouseenter', null);
//                 node.removeEventListener('mouseleave', null);
//             });
//         }

//         setEditMode(false);
//     };

//     const toggleEditMode = () => {
//         if (editMode) {
//             saveEdits();
//         } else {
//             enableLiveEdit();
//         }
//     };

//     const handleView = async () => {
//         try {
//             if (!url || !language || !userData?._id) {
//                 alert('Please ensure that you have entered a valid URL, selected a language, and are logged in.');
//                 return;
//             }
    
//             // Construct the URL to view the translated website
//             const viewUrl = `http://localhost:3001/api/dashboard/view-translated-website?userId=${userData._id}&url=${encodeURIComponent(url)}&language=${language}`;
            
//             // Open the translated webpage in a new tab
//             window.open(viewUrl, '_blank');
//         } catch (error) {
//             console.error('Error viewing the translated website:', error);
//             alert('An error occurred while trying to view the translated website.');
//         }
//     };

//     return (
//         <>

//             <div className="home-container">
//                 <HStack className="header" position={'right'}>
//                     <Heading size='lg' color={'#e65c00'}>
//                         Website Localization    
//                     </Heading>
//                     <Button ref={btnRef} onClick={onOpen} leftIcon={<FaUser />} color={'white'} backgroundColor={'#e65c00'}>
//                         Profile
//                     </Button>
//                     {/* <Button onClick={toggleEditMode} color={'white'} backgroundColor={'#e65c00'}>
//                         {editMode ? 'Save Edit' : ' Live Edit'}
//                     </Button> */}
//                 </HStack>

//                 <form onSubmit={handleSearch}>
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
//                     <Button color={'white'} backgroundColor={'#e65c00'} type="submit">Submit</Button>
//                 </form>

//                 {error && <div className="error-message">{error}</div>}
//                 {translatedHTML && (
//                     <div className="iframe-container">
//                         <HStack>
//                             <Button onClick={handleView} color={'white'} backgroundColor={'#e65c00'}>View Page</Button>
//                             {/* <Button onClick={toggleEditMode} color={'white'} backgroundColor={'#e65c00'}>
//                         {editMode ? 'Save Edit' : ' Live Edit'}
//                     </Button> */}
//                         </HStack>
//                         <iframe
//                             ref={iframeRef}
//                             srcDoc={translatedHTML}
//                             title="Translated Page"
//                             width="100%"
//                             height="500px"
//                             style={{ border: 'none', marginTop: '20px' }}
//                         />
//                     </div>
//                 )}
//                 <ProfileDrawer
//                     isOpen={isOpen}
//                     onClose={onClose}
//                     btnRef={btnRef}
//                     userData={userData}
//                     logout={logout}
//                 />
//             </div>
//         </>
//     );
// };

// export default Home;



import React, { useState, useEffect, useRef, useContext } from 'react';
import { extractAndTranslateText } from '../api/translate';
import { AuthContext } from '../context/AuthContext';
import { Button, HStack, useDisclosure, Heading } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import '../styles/home.css';
import ProfileDrawer from '../components/ProfileDrawer';
import { fetchUserData } from '../api/auth';

const Home = () => {
    const { logout } = useContext(AuthContext);
    const [url, setUrl] = useState('');
    const [language, setLanguage] = useState('');
    const [error, setError] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('authToken');
    const [userData, setUserData] = useState(null);

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

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    const handleSearch = async () => {
        setError(null);

        if (!isValidUrl(url)) {
            setError('Please enter a valid URL.');
            return;
        }

        setLoading(true);

        try {
            if (userData && userData._id) {
                const data = await extractAndTranslateText(url, language, userData._id);

                if (data && data.translatedHTML) {
                    // Open the translated content in a new tab
                    const newWindow = window.open();
                    newWindow.document.write(data.translatedHTML);
                    newWindow.document.close();
                } else {
                    setError('Translation failed. Please try again.');
                }
            } else {
                setError('User data is not available. Please ensure you are logged in.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message || 'An error occurred while translating the text.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home-container">
            <HStack className="header" position={'right'}>
                <Heading size='lg' color={'#e65c00'}>
                    Website Localization
                </Heading>
                <Button ref={btnRef} onClick={onOpen} leftIcon={<FaUser />} color={'white'} backgroundColor={'#e65c00'}>
                    Profile
                </Button>
            </HStack>

            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
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
                <Button color={'white'} backgroundColor={'#e65c00'} type="submit" isLoading={loading}>
                    Submit
                </Button>
            </form>

            {error && <div className="error-message">{error}</div>}

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
