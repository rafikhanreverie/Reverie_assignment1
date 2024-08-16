const puppeteer = require('puppeteer');
const Translation = require('../models/Translation');

async function extractAndTranslateText(url, targetLanguage) {
    try {
        // const existingTranslation = await Translation.findOne({ url, language: targetLanguage });
        // if (existingTranslation) {
        //     console.log('Translation found in database');
        //     return { translatedHTML: existingTranslation.translatedHTML };
        // }
        const existingTranslation = await Translation.findOne({ url, language: targetLanguage });
        if (existingTranslation) {
            console.log('Translation found in database');
            
            // Check if editedHTML exists
            const htmlToReturn = existingTranslation.editedHTML 
                ? existingTranslation.editedHTML 
                : existingTranslation.translatedHTML;
            
            return { translatedHTML: htmlToReturn };
        }


        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        // Regex to match email addresses and phone numbers
        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
        await page.exposeFunction('reverseText', (text) => {

            const filteredText = text.replace(/[^a-zA-Z0-9\s]/g, '');
            // console.log(filteredText)
            // Check if the filtered text matches email or phone number

            if (emailRegex.test(text) || phoneRegex.test(text)) {
                return text;

            }
            // Reverse the text otherwise
            else {
                return filteredText.split('').reverse().join('');
            }

        })

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

        const newTranslation = new Translation({ url, language: targetLanguage, translatedHTML });
        await newTranslation.save();

        return { translatedHTML };
    } catch (error) {
        console.error(`Error in extractAndTranslateText: ${error.message}`);
        throw error;
    }
}

module.exports = extractAndTranslateText;
