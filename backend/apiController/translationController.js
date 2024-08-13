const Translation = require('../models/Translation');
const extractAndTranslateText = require('../scripts/puppeteer-script');

exports.extractAndTranslate = async (req, res) => {
    const { url, targetLanguage } = req.body;

    if (!url || !targetLanguage) {
        return res.status(400).json({ error: 'URL and target language are required' });
    }

    try {
        const { translatedHTML } = await extractAndTranslateText(url, targetLanguage);
        res.json({ translatedHTML });
    } catch (error) {
        console.error(`Error in extractAndTranslate: ${error.message}`);
        res.status(500).json({ error: 'Failed to extract or translate text' });
    }
};

exports.viewTranslated = async (req, res) => {
    const { key } = req.params;

    try {
        const translatedHTML = await Translation.findById(key);
        if (translatedHTML) {
            res.send(translatedHTML.translatedHTML);
        } else {
            res.status(404).send('Content not found');
        }
    } catch (error) {
        console.error(`Error in viewTranslated: ${error.message}`);
        res.status(500).json({ error: 'Failed to retrieve translated content' });
    }
};
