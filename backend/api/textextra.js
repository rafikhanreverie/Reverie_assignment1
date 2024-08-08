const express = require('express');
const extractAndTranslateText = require('../puppeteer-script.js');

const router = express.Router();

router.post('/extract-translate-text', async (req, res) => {
    const { url, targetLanguage } = req.body;

    if (!url || !targetLanguage) {
        return res.status(400).json({ error: 'URL and target language are required' });
    }

    try {
        const { pageSource, translatedHTML } = await extractAndTranslateText(url, targetLanguage);
        res.json({ pageSource, translatedHTML });
    } catch (error) {
        console.error('Error extracting or translating text:', error);
        res.status(500).json({ error: 'Failed to extract or translate text' });
    }
});

module.exports = router;
