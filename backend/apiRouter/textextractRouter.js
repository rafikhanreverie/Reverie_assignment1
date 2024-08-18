const express = require('express');
const { extractAndTranslate, viewTranslated, saveEditedPage } = require('../apiController/translationController');

const router = express.Router();

router.post('/extract-translate-text', extractAndTranslate);
router.post('/saveEditedPage', saveEditedPage);
router.get('/view-translated/:key', viewTranslated);

module.exports = router;
