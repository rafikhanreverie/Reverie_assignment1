const express = require('express');
const router = express.Router();

const { fetchWebsiteData, deleteTranslation, viewTranslatedWebsite } = require('../apiController/dashboard-table');

// Route to fetch website data
router.get('/fetch-website-data', fetchWebsiteData);

// Route to delete a translation by ID
router.delete('/fetch-website-data/:id', deleteTranslation);

// Route to view translated website
router.get('/view-translated-website', viewTranslatedWebsite);

module.exports = router;
