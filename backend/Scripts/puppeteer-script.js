const puppeteer = require('puppeteer');
const Translation = require('../models/Translation');

async function extractAndTranslateText(url, targetLanguage) {
    try {
        // const existingTranslation = await Translation.findOne({ url, language: targetLanguage });
        // if (existingTranslation) {
        //     console.log('Translation found in database');
        //     return { translatedHTML: existingTranslation.translatedHTML };
        // }

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.exposeFunction('reverseText', (text) => {
            return text.split('').reverse().join('');
        });

        // Reverie NMT API

        // await page.exposeFunction('translateText', async (text) => {
        //     try {
        //         const response = await axios.post(
        //             'https://revapi.reverieinc.com',
        //             {
        //                 data: [text],
        //             },
        //             {
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     'REV-API-KEY': '99425a49d90bbc4829af2934e823ce27b5b46a55',
        //                     'REV-APP-ID': 'rev.interntesting',
        //                     'src_lang': 'en',
        //                     'tgt_lang': targetLanguage,
        //                     'domain': '1',
        //                     'REV-APPNAME': 'localization',
        //                 },
        //             }
        //         );
        
        //         return response.data.responseList[0].outString;
        //     } catch (error) {
        //         console.error('Error in translateText:', error.response ? error.response.data : error.message);
        //         return text; // Return the original text if translation fails
        //     }
        // });

        await page.goto(url, { waitUntil: 'networkidle2' });

        const translatedHTML = await page.evaluate(async () => {
            const textNodes = [];
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            while (walker.nextNode()) {
                textNodes.push(walker.currentNode);
            }

            for (const node of textNodes) {
                const reversedText = await window.reverseText(node.nodeValue);
                node.nodeValue = reversedText;
            }

            return document.documentElement.outerHTML;
        });

        await browser.close();

        // const newTranslation = new Translation({ url, language: targetLanguage, translatedHTML });
        // await newTranslation.save();

        return { translatedHTML };
    } catch (error) {
        console.error(`Error in extractAndTranslateText: ${error.message}`);
        throw error;
    }
}

module.exports = extractAndTranslateText;
