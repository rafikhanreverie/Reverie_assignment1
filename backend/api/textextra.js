const express = require('express');
const extractAndTranslateText = require('../puppeteer-script');

const router = express.Router();

router.post('/extract-translate-text', async (req, res) => {
    const { url, targetLanguage } = req.body;

    if (!url || !targetLanguage) {
        console.error('Missing URL or target language');
        return res.status(400).json({ error: 'URL and target language are required' });
    }

    try {
        console.log(`Received request to translate: URL=${url}, targetLanguage=${targetLanguage}`);
        const { translatedHTML } = await extractAndTranslateText(url, targetLanguage);
        // console.log('Translated HTML:', translatedHTML);  // Log the translated HTML
        res.json({ translatedHTML });
    } catch (error) {
        console.error('Error during translation process:', error.message);
        res.status(500).json({ error: 'Failed to extract or translate text', details: error.message });
    }
});

module.exports = router;
