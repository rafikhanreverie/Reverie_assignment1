const express = require('express');
const router = express.Router();
const Translation = require('../models/Translation'); // Adjust path as needed


exports.fetchWebsiteData = async (req, res) => {
    try {
        const { userId } = req.query; // Get userId from query parameters

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' }); // Return error if userId is missing
        }

        // Fetch documents based on the userId
        const translations = await Translation.find({ userId });

        if (translations.length === 0) {
            return res.json({ message: 'No data available' }); // Send "No data available" message
        }

        res.json(translations);
    } catch (err) {
        console.error('Error fetching translations:', err);
        res.status(500).json({ error: 'Error fetching translations' });
    }
}


exports.deleteTranslation = async (req, res) => {
    try {
        const { id } = req.params; // Get the ID from the route parameters

        // Find and delete the translation by ID
        const deletedTranslation = await Translation.findByIdAndDelete(id);

        if (!deletedTranslation) {
            return res.status(404).json({ message: 'Translation not found' });
        }

        res.status(200).json({ message: 'Translation deleted successfully' });
    } catch (err) {
        console.error('Error deleting translation:', err);
        res.status(500).json({ error: 'Error deleting translation' });
    }
};

exports.viewTranslatedWebsite = async (req, res) => {
    try {
        const { userId, url, language } = req.query; // Get userId, URL, and language from query parameters

        if (!userId || !url || !language) {
            return res.status(400).json({ error: 'User ID, URL, and language are required' }); // Return error if userId, URL, or language is missing
        }

        // Fetch the translation document based on userId, URL, and language
        const translation = await Translation.findOne({ userId, url, language });

        if (!translation) {
            return res.status(404).json({ message: 'Translation not found' }); // Send 404 if translation not found
        }

        // Send the translated HTML content
        // If edited HTML is present, send it, otherwise send translated HTML
        res.status(200).send(translation.editedHTML || translation.translatedHTML);
    } catch (err) {
        console.error('Error fetching translated website:', err);
        res.status(500).json({ error: 'Error fetching translated website' });
    }
};
