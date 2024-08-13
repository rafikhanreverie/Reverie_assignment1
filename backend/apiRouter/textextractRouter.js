const express = require('express');
const { extractAndTranslate, viewTranslated } = require('../apiController/translationController');

const router = express.Router();

router.post('/extract-translate-text', extractAndTranslate);
router.get('/view-translated/:key', viewTranslated);

module.exports = router;
