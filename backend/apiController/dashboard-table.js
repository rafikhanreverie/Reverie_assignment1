const express = require('express');
const router = express.Router();
const TD = require('../models/TextDictionary');
const puppeteer = require('puppeteer');

exports.fetchWebsiteData = async (req, res) => {
    try {
        const { userId } = req.query; // Get userId from query parameters

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' }); // Return error if userId is missing
        }

        // Fetch documents based on the userId
        const translations = await TD.find({ userId });

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
        const deletedTranslation = await TD.findByIdAndDelete(id);

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
        const { userId, url, language } = req.query;

        if (!userId || !url || !language) {
            return res.status(400).json({ error: 'User ID, URL, and language are required' });
        }

        // Fetch the dictionary for the given userId, URL, and language
        const textDictionary = await TD.findOne({ userId, url, language });

        if (!textDictionary) {
            return res.status(404).json({ message: 'Translation not found' });
        }

        // Launch Puppeteer
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Navigate to the webpage
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Inject the translations into the page
        await page.evaluate((dictionary) => {
            dictionary.forEach(entry => {
                const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
                let currentNode;

                while (currentNode = textNodes.nextNode()) {
                    const textContent = currentNode.textContent.trim();
                    if (textContent === entry.key) {
                        currentNode.textContent = entry.value;
                    }
                }
            });
        }, textDictionary.dictionary);

        // Get the modified page content
        const translatedHTML = await page.content();

        await browser.close();
        console.log('Translated website compiled and viewed successfully');

        // Send the modified HTML content
        res.status(200).send(translatedHTML);
    } catch (err) {
        console.error('Error fetching translated website:', err.message);
        res.status(500).json({ error: `Error fetching translated website: ${err.message}` });
    }
};
