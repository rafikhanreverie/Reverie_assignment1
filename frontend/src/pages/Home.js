import React, { useState, useEffect, useRef, useContext } from 'react';
import { extractAndTranslateText } from '../api/translate';
import { AuthContext } from '../context/AuthContext';
import { Button, HStack, useDisclosure } from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import '../styles/home.css';
import ProfileDrawer from '../components/ProfileDrawer';
import { saveEditedPage } from '../api/translate';
import { fetchUserData } from '../api/auth';

const Home = () => {
    const { logout } = useContext(AuthContext);
    const [url, setUrl] = useState('');
    const [language, setLanguage] = useState('');
    const [translatedHTML, setTranslatedHTML] = useState('');
    const [error, setError] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const iframeRef = useRef(null);
    const token = localStorage.getItem('authToken');
    const [userData, setUserData] = useState(null);

    const [editMode, setEditMode] = useState(false);

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
            setLanguage(defaultLanguage);
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
            if (userData && userData._id) {
                const data = await extractAndTranslateText(url, language, userData._id);
                setTranslatedHTML(data.translatedHTML);
                setError('');
            }
        } catch (err) {
            setError(err.message);
            setTranslatedHTML('');
        }
    };

    const enableLiveEdit = () => {
        if (iframeRef.current && iframeRef.current.contentDocument) {
            const iframeDoc = iframeRef.current.contentDocument;
            const textNodes = iframeDoc.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a');

            textNodes.forEach(node => {
                node.contentEditable = true;
                node.addEventListener('mouseenter', () => {
                    node.style.outline = '2px solid #f05d0d';
                });
                node.addEventListener('mouseleave', () => {
                    node.style.outline = '';
                });
            });
        }

        setEditMode(true);
    };

    const saveEdits = async () => {
        if (iframeRef.current && iframeRef.current.contentDocument) {
            const iframeDoc = iframeRef.current.contentDocument;
            const editedHTML = iframeDoc.documentElement.outerHTML;

            await saveEditedPage(url, language, editedHTML, token);

            // Disable editing after saving
            const textNodes = iframeDoc.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div, a');

            textNodes.forEach(node => {
                node.contentEditable = false;
                node.style.outline = ''; // Remove outline after editing
                node.removeEventListener('mouseenter', null);
                node.removeEventListener('mouseleave', null);
            });
        }

        setEditMode(false);
    };

    const toggleEditMode = () => {
        if (editMode) {
            saveEdits();
        } else {
            enableLiveEdit();
        }
    };

    const handleView = async () => {
        try {
            // Construct the URL to view the translated website
            const viewUrl = `http://localhost:3001/api/dashboard/view-translated-website?userId=${userData?._id}&url=${encodeURIComponent(url)}&language=${language}`;
            window.open(viewUrl, '_blank');
        } catch (error) {
            console.error('Error viewing the translated website:', error);
            alert('An error occurred while trying to view the translated website.');
        }
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
                    <HStack>
                        <Button onClick={handleView}>View Page</Button>
                    </HStack>
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
