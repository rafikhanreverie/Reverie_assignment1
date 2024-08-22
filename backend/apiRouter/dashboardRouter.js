const express = require('express');
const router = express.Router();
const TextDictionary = require('../models/TextDictionary'); // Mongoose model

const { fetchWebsiteData, deleteTranslation, viewTranslatedWebsite } = require('../apiController/dashboard-table');

// Route to fetch website data
router.get('/fetch-website-data', fetchWebsiteData);

// Route to delete a translation by ID
router.delete('/fetch-website-data/:id', deleteTranslation);

// Route to view translated website
router.get('/view-translated-website', viewTranslatedWebsite);

router.get('/text-dictionary', async (req, res) => {
    const { userId, url, language } = req.query;

    try {
        const dictionary = await TextDictionary.findOne({ userId, url, language });
        if (!dictionary) {
            return res.status(404).json({ message: 'Dictionary not found' });
        }
        res.json(dictionary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update text dictionary
router.put('/text-dictionary', async (req, res) => {
    const { userId, url, language, dictionary } = req.body;
  
    if (!userId || !url || !language || !Array.isArray(dictionary)) {
      return res.status(400).json({ message: 'Invalid input data' });
    }
  
    try {
      const updatedDocument = await TextDictionary.findOneAndUpdate(
        { userId, url, language },
        { dictionary },
        { new: true }
      );
  
      if (!updatedDocument) {
        return res.status(404).json({ message: 'Document not found' });
      }
  
      res.json(updatedDocument);
    } catch (error) {
      console.error('Error updating text dictionary:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  



module.exports = router;


