import React, { useState } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [url, setUrl] = useState('');
    const [language, setLanguage] = useState('');
    const [translatedHTML, setTranslatedHTML] = useState('');

    const languages = [
        'Hindi', 'Assamese', 'Bengali', 'Gujarati', 'Kannada', 'Malayalam', 
        'Marathi', 'Odia', 'Punjabi', 'Tamil', 'Telugu', 'English'
    ];

    const onSubmit = async (e) => {
        e.preventDefault();
        await extractAndTranslateText(url, language);
    };

    const extractAndTranslateText = async (url, language) => {
        try {
            const response = await axios.post('http://localhost:3001/api/textextra/extract-translate-text', {
                url,
                targetLanguage: language
            });
            setTranslatedHTML(response.data.translatedHTML);
        } catch (error) {
            console.error('Error extracting or translating text:', error);
            setTranslatedHTML('An error occurred while extracting or translating text.');
        }
    };

    return (
        <div className="home-container">
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
                            <option key={lang} value={lang}>
                                {lang}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>

            {translatedHTML && (
                <div className="iframe-container">
                    <h2>Translated Page:</h2>
                    <iframe
                        srcDoc={translatedHTML}
                        title="Translated Page"
                    />
                </div>
            )}
        </div>
    );
};

export default Home;
