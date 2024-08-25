const express = require('express');
const { extractAndTranslate, viewTranslated, saveEditedPage } = require('../apiController/translationController');
const  extractAndTranslateText  = require('../scripts/puppeteer-script');
const router = express.Router();

router.post('/extract-translate-text', extractAndTranslate);
router.post('/saveEditedPage', saveEditedPage);
router.get('/view-translated/:key', viewTranslated);

router.post('/localize', async (req, res) => {
    const { url, language } = req.body;
    const userId = req.user._id;  // Assuming you have middleware that attaches user info to req

    try {
        const { translatedHTML } = await extractAndTranslateText(url, language, userId);
        res.json({ content: translatedHTML });
    } catch (error) {
        console.error(`Error localizing page: ${error.message}`);
        res.status(500).json({ message: 'Failed to localize page' });
    }
});




module.exports = router;
