const Translation = require('../models/Translation');
const extractAndTranslateText = require('../scripts/puppeteer-script');

exports.extractAndTranslate = async (req, res) => {
    const { url, targetLanguage,userId } = req.body;

    if (!url || !targetLanguage) {
        return res.status(400).json({ error: 'URL and target language are required' });
    }

    try {
        const { translatedHTML } = await extractAndTranslateText(url, targetLanguage,userId);
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



exports.saveEditedPage = async (req, res) => {
    const { url, language, editedHTML } = req.body;

    if (!url || !language || !editedHTML) {
        return res.status(400).json({ error: 'URL, language, and edited HTML are required' });
    }

    try {
        // console.log('Received data:', { url, language, editedHTML });

        // Ensure that editedHTML is saved under the correct field
        const filter = { url, language };
        const update = { editedHTML, createdAt: new Date() };
        const options = { upsert: true, new: true };

        const result = await Translation.findOneAndUpdate(filter, update, options);
        
        // console.log('Database result:', result);

        res.json({ message: 'Edited page saved successfully', data: result });
    } catch (error) {
        console.error(`Error saving edited page: ${error.message}`);
        res.status(500).json({ error: 'Failed to save edited page' });
    }
}
