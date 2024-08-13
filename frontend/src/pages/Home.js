
import React, { useContext, useState } from 'react';
import { extractAndTranslateText } from '../api/translate';
import '../styles/home.css';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const { logout } = useContext(AuthContext);
    const [url, setUrl] = useState('');
    const [language, setLanguage] = useState('');
    const [translatedHTML, setTranslatedHTML] = useState('');
    const [error, setError] = useState('');

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

    return (
        <>
            <div className="home-container">
                <button className='logout-button' onClick={logout}>Logout</button> {/* Logout button */}
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
                    <button type="submit">Submit</button>
                </form>

                {error && <div className="error-message">{error}</div>}
                {translatedHTML && (
                    <div className="iframe-container">
                        <h2>Translated Page:</h2>
                        <iframe
                            srcDoc={translatedHTML}
                            title="Translated Page"
                            width="100%"
                            height="500px"
                            style={{ border: 'none', marginTop: '20px' }}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
