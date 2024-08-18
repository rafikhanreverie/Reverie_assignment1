const express = require('express');
const router = express.Router();
const Translation = require('../models/Translation'); // Adjust path as needed


exports.deleteTranslation = async (req, res) => {
    try {
        const { id } = req.params; // Get the ID from the request parameters
        const { userId } = req.user; // Assuming userId is attached to req.user from authentication middleware

        // Find and delete the translation
        const result = await Translation.findOneAndDelete({ _id: id, userId });

        if (!result) {
            return res.status(404).json({ error: 'Translation not found' });
        }

        res.json({ message: 'Translation deleted successfully' });
    } catch (err) {
        console.error('Error deleting translation:', err);
        res.status(500).json({ error: 'Error deleting translation' });
    }
};

