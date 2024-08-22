// const puppeteer = require('puppeteer');
// const Translation = require('../models/Translation');

// async function extractAndTranslateText(url, targetLanguage, userId) {
//     try {
//         // const existingTranslation = await Translation.findOne({ url, language: targetLanguage });
//         // if (existingTranslation) {
//         //     console.log('Translation found in database');
//         //     return { translatedHTML: existingTranslation.translatedHTML };
//         // }
//         const existingTranslation = await Translation.findOne({ url, language: targetLanguage });
//         if (existingTranslation) {
//             console.log('Translation found in database');
            
//             // Check if editedHTML exists
//             const htmlToReturn = existingTranslation.editedHTML 
//                 ? existingTranslation.editedHTML 
//                 : existingTranslation.translatedHTML;
            
//             return { translatedHTML: htmlToReturn };
//         }


//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();
//         // Regex to match email addresses and phone numbers
//         const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
//         const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
//         await page.exposeFunction('reverseText', (text) => {

//             const filteredText = text.replace(/[^a-zA-Z0-9\s]/g, '');
//             // console.log(filteredText)
//             // Check if the filtered text matches email or phone number

//             if (emailRegex.test(text) || phoneRegex.test(text)) {
//                 return text;

//             }
//             // Reverse the text otherwise
//             else {
//                 return filteredText.split('').reverse().join('');
//             }

//         })

//         // Reverie NMT API

//         // await page.exposeFunction('translateText', async (text) => {
//         //     try {
//         //         const response = await axios.post(
//         //             'https://revapi.reverieinc.com',
//         //             {
//         //                 data: [text],
//         //             },
//         //             {
//         //                 headers: {
//         //                     'Content-Type': 'application/json',
//         //                     'REV-API-KEY': '99425a49d90bbc4829af2934e823ce27b5b46a55',
//         //                     'REV-APP-ID': 'rev.interntesting',
//         //                     'src_lang': 'en',
//         //                     'tgt_lang': targetLanguage,
//         //                     'domain': '1',
//         //                     'REV-APPNAME': 'localization',
//         //                 },
//         //             }
//         //         );

//         //         return response.data.responseList[0].outString;
//         //     } catch (error) {
//         //         console.error('Error in translateText:', error.response ? error.response.data : error.message);
//         //         return text; // Return the original text if translation fails
//         //     }
//         // });

//         await page.goto(url, { waitUntil: 'networkidle2' });

//         const translatedHTML = await page.evaluate(async () => {
//             const textNodes = [];
//             const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
//             while (walker.nextNode()) {
//                 textNodes.push(walker.currentNode);
//             }

//             for (const node of textNodes) {
//                 const reversedText = await window.reverseText(node.nodeValue);
//                 node.nodeValue = reversedText;
//             }

//             return document.documentElement.outerHTML;
//         });

//         await browser.close();

//         const newTranslation = new Translation({ url, language: targetLanguage, translatedHTML });
//         await newTranslation.save();

//         return { translatedHTML };
//     } catch (error) {
//         console.error(`Error in extractAndTranslateText: ${error.message}`);
//         throw error;
//     }
// }

// module.exports = extractAndTranslateText;
//     const puppeteer = require('puppeteer');
//     const Translation = require('../models/Translation');

//     async function extractAndTranslateText(url, targetLanguage, userId) {
//         try {
//             // Check if translation already exists in the database
//             const existingTranslation = await Translation.findOne({ url, language: targetLanguage, userId });
//             if (existingTranslation) {
//                 console.log('Translation found in database');

//                 // Return editedHTML if it exists, otherwise return translatedHTML
//                 const htmlToReturn = existingTranslation.editedHTML 
//                     ? existingTranslation.editedHTML 
//                     : existingTranslation.translatedHTML;
                
//                 return { translatedHTML: htmlToReturn };
//             }

//             // Launch Puppeteer browser
//             const browser = await puppeteer.launch({ headless: true });
//             const page = await browser.newPage();

//             // Define regex to match email addresses and phone numbers
//             const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
//             const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;

//             await page.exposeFunction('reverseText', (text) => {
//                 const filteredText = text.replace(/[^a-zA-Z0-9\s]/g, '');

//                 // Check if the filtered text matches email or phone number
//                 if (emailRegex.test(text) || phoneRegex.test(text)) {
//                     return text;
//                 } else {
//                     // Reverse the text otherwise
//                     return filteredText.split('').reverse().join('');
//                 }
//             });

//             // Go to the URL and wait until the network is idle
//             await page.goto(url, { waitUntil: 'networkidle2' });

//             // Extract and manipulate text nodes
//             const translatedHTML = await page.evaluate(async () => {
//                 const textNodes = [];
//                 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
//                 while (walker.nextNode()) {
//                     textNodes.push(walker.currentNode);
//                 }

//                 for (const node of textNodes) {
//                     const reversedText = await window.reverseText(node.nodeValue);
//                     node.nodeValue = reversedText;
//                 }

//                 return document.documentElement.outerHTML;
//             });

//             // Close the browser
//             await browser.close();

//             // Use updateOne with upsert option to prevent duplicates
//             await Translation.updateOne(
//                 { url, language: targetLanguage, userId },  // Query to match
//                 { 
//                     $set: { translatedHTML },               // Update the translatedHTML
//                     $setOnInsert: { url, language: targetLanguage, userId }  // Set these fields on insert
//                 },
//                 { upsert: true }  // Insert if not found, otherwise update
//             );

//             return { translatedHTML };
//         } catch (error) {
//             console.error(`Error in extractAndTranslateText: ${error.message}`);
//             throw error;
//         }
//     }

//     module.exports = extractAndTranslateText;


//     const puppeteer = require('puppeteer');
// const axios = require('axios');
// const Translation = require('../models/Translation');

// async function extractAndTranslateText(url, targetLanguage, userId) {
//     try {
//         // Check if translation already exists in the database
//         const existingTranslation = await Translation.findOne({ url, language: targetLanguage, userId });
//         if (existingTranslation) {
//             console.log('Translation found in database');

//             // Return editedHTML if it exists, otherwise return translatedHTML
//             const htmlToReturn = existingTranslation.editedHTML 
//                 ? existingTranslation.editedHTML 
//                 : existingTranslation.translatedHTML;
            
//             return { translatedHTML: htmlToReturn };
//         }

//         // Launch Puppeteer browser
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         // Expose the translateText function to the page context
//         await page.exposeFunction('translateText', async (text) => {
//             try {
//                 const response = await axios.post(
//                     'https://revapi.reverieinc.com',
//                     {
//                         data: [text],
//                     },
//                     {
//                         headers: {
//                             'Content-Type': 'application/json',
//                             'REV-API-KEY': '99425a49d90bbc4829af2934e823ce27b5b46a55',
//                             'REV-APP-ID': 'rev.interntesting',
//                             'src_lang': 'en',
//                             'tgt_lang': targetLanguage,
//                             'domain': '1',
//                             'REV-APPNAME': 'localization',
//                         },
//                     }
//                 );

//                 return response.data.responseList[0].outString;
//             } catch (error) {
//                 console.error('Error in translateText:', error.response ? error.response.data : error.message);
//                 return text; // Return the original text if translation fails
//             }
//         });

//         // Go to the URL and wait until the network is idle
//         await page.goto(url, { waitUntil: 'networkidle2' });

//         // Extract and translate text nodes
//         const translatedHTML = await page.evaluate(async () => {
//             const textNodes = [];
//             const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
//             while (walker.nextNode()) {
//                 textNodes.push(walker.currentNode);
//             }

//             for (const node of textNodes) {
//                 const translatedText = await window.translateText(node.nodeValue);
//                 node.nodeValue = translatedText;
//             }

//             return document.documentElement.outerHTML;
//         });

//         // Close the browser
//         await browser.close();

//         // Use updateOne with upsert option to prevent duplicates
//         await Translation.updateOne(
//             { url, language: targetLanguage, userId },  // Query to match
//             { 
//                 $set: { translatedHTML },               // Update the translatedHTML
//                 $setOnInsert: { url, language: targetLanguage, userId }  // Set these fields on insert
//             },
//             { upsert: true }  // Insert if not found, otherwise update
//         );

//         return { translatedHTML };
//     } catch (error) {
//         console.error(`Error in extractAndTranslateText: ${error.message}`);
//         throw error;
//     }
// }

// module.exports = extractAndTranslateText;



// This is the final version of the puppeteer-script.js file:
// const puppeteer = require('puppeteer');
// const TextDictionary = require('../models/TextDictionary');
// const { URL } = require('url');

// async function extractAndTranslateText(url, targetLanguage, userId) {
//     try {
//         const existingDictionary = await TextDictionary.findOne({ url, language: targetLanguage, userId });
//         if (existingDictionary) {
//             console.log('Dictionary found in database');
//             const dictionaryMap = new Map(existingDictionary.dictionary.map(entry => [entry.key, entry.value]));

//             const browser = await puppeteer.launch({ headless: true });
//             const page = await browser.newPage();

//             await page.goto(url, { waitUntil: 'networkidle2' });

//             const translatedHTML = await page.evaluate((dictionary, baseUrl) => {
//                 const textNodes = [];
//                 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
//                 while (walker.nextNode()) {
//                     textNodes.push(walker.currentNode);
//                 }

//                 for (const node of textNodes) {
//                     const originalText = node.nodeValue.trim();
//                     if (dictionary[originalText]) {
//                         node.nodeValue = dictionary[originalText];
//                     }
//                 }

//                 // Modify all links to be fully qualified URLs
//                 const links = Array.from(document.querySelectorAll('a[href]'));
//                 links.forEach(link => {
//                     const href = link.getAttribute('href');
//                     const absoluteUrl = new URL(href, baseUrl).href;
//                     link.setAttribute('href', absoluteUrl);
//                 });

//                 return document.documentElement.outerHTML;
//             }, Object.fromEntries(dictionaryMap), url);

//             await browser.close();
//             return { translatedHTML };
//         }

//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
//         const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;

//         const textDictionary = [];

//         await page.exposeFunction('processText', async (text) => {
//             const trimmedText = text.trim();
//             if (trimmedText.length === 0 || emailRegex.test(trimmedText) || phoneRegex.test(trimmedText)) {
//                 return trimmedText;
//             }

//             const filteredText = trimmedText.replace(/[^a-zA-Z0-9\s]/g, '');
//             const reversedText = filteredText.split('').reverse().join('');

//             textDictionary.push({ key: trimmedText, value: reversedText });

//             return reversedText;
//         });

//         await page.goto(url, { waitUntil: 'networkidle2' });

//         const translatedHTML = await page.evaluate(async (baseUrl) => {
//             const textNodes = [];
//             const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
//             while (walker.nextNode()) {
//                 textNodes.push(walker.currentNode);
//             }

//             for (const node of textNodes) {
//                 const translatedText = await window.processText(node.nodeValue);
//                 node.nodeValue = translatedText;
//             }

//             // Modify all links to be fully qualified URLs
//             const links = Array.from(document.querySelectorAll('a[href]'));
//             links.forEach(link => {
//                 const href = link.getAttribute('href');
//                 const absoluteUrl = new URL(href, baseUrl).href;
//                 link.setAttribute('href', absoluteUrl);
//             });

//             return document.documentElement.outerHTML;
//         }, url);

//         await browser.close();

//         await TextDictionary.updateOne(
//             { url, language: targetLanguage, userId },
//             { $set: { dictionary: textDictionary } },
//             { upsert: true }
//         );

//         return { translatedHTML };
//     } catch (error) {
//         console.error(`Error in extractAndTranslateText: ${error.message}`);
//         throw error;
//     }
// }

// module.exports = extractAndTranslateText;


// const puppeteer = require('puppeteer');

// async function extractAndTranslateText(url, targetLanguage) {
//     try {
//         const browser = await puppeteer.launch({ headless: true });
//         const page = await browser.newPage();

//         await page.goto(url, { waitUntil: 'networkidle2' });

//         const result = await page.evaluate(async (url) => {
//             // Function to reverse text
//             function reverseText(text) {
//                 const filteredText = text.replace(/[^a-zA-Z0-9\s]/g, '');
//                 return filteredText.split('').reverse().join('');
//             }

//             const textNodes = [];
//             const hrefLinks = [];
//             const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

//             while (walker.nextNode()) {
//                 textNodes.push(walker.currentNode);
//             }

//             const links = document.querySelectorAll('a[href]');
//             links.forEach(link => {
//                 const resolvedHref = new URL(link.href, url).href;
//                 link.href = resolvedHref;
//                 link.target = '_self';
//                 hrefLinks.push(resolvedHref);
//             });

//             for (const node of textNodes) {
//                 const reversedText = reverseText(node.nodeValue);
//                 node.nodeValue = reversedText;
//             }

//             // Inject a script to add an alert on every link click
//             const script = `
//                 document.addEventListener('click', function(event) {
//                     const link = event.target.closest('a');
//                     if (link) {
//                         event.preventDefault(); // Prevent the default action (navigation)
//                         alert('You clicked a link to ' + link.href);
//                         setTimeout(() => {
//                             window.location.href = link.href; // Navigate to the link
//                             setTimeout(() => {
//                                 window.location.reload(); // Reload the page after navigation
//                             }, 500); // Reload after 500ms to ensure the navigation is complete
//                         }, 0); 
//                     }
//                 });
//             `;

//             const scriptElement = document.createElement('script');
//             scriptElement.textContent = script;
//             document.body.appendChild(scriptElement);

//             return {
//                 translatedHTML: document.documentElement.outerHTML,
//                 hrefLinks
//             };
//         }, url);

//         await browser.close();

//         console.log('All href links on the page:', result.hrefLinks);

//         return result;
//     } catch (error) {
//         // console.error(Error in extractAndTranslateText: ${error.message} ⁠);
//         throw error;
//     }
// }

// module.exports = extractAndTranslateText;


const TextDictionary = require('../models/TextDictionary');
const puppeteer = require('puppeteer');
const { URL } = require('url');

async function extractAndTranslateText(url, targetLanguage, userId) {
    try {
        const existingDictionary = await TextDictionary.findOne({ url, language: targetLanguage, userId });
        if (existingDictionary) {
            console.log('Dictionary found in database');
            const dictionaryMap = new Map(existingDictionary.dictionary.map(entry => [entry.key, entry.value]));

            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();

            await page.goto(url, { waitUntil: 'networkidle2' });

            const translatedHTML = await page.evaluate((dictionary, baseUrl) => {
                const textNodes = [];
                const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                while (walker.nextNode()) {
                    textNodes.push(walker.currentNode);
                }

                for (const node of textNodes) {
                    const originalText = node.nodeValue.trim();
                    if (dictionary[originalText]) {
                        node.nodeValue = dictionary[originalText];
                    }
                }

                // Modify all links to be fully qualified URLs
                const links = Array.from(document.querySelectorAll('a[href]'));
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    const absoluteUrl = new URL(href, baseUrl).href;
                    link.setAttribute('href', absoluteUrl);
                });

                return document.documentElement.outerHTML;
            }, Object.fromEntries(dictionaryMap), url);

            await browser.close();
            return { translatedHTML };
        }

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;

        // Regex patterns to ignore certain tags and attributes
        const ignoreRegexPatterns = [
            /<iframe[^>]*src="https:\/\/www\.googletagmanager\.com\/ns\.html\?id=GTM-NXK9CJ"[^>]*><\/iframe>/g,
            /→/g,
            /©/g,
            // Add more patterns as needed
        ];

        const textDictionary = [];

        await page.exposeFunction('processText', async (text) => {
            const trimmedText = text.trim();
            if (trimmedText.length === 0 || emailRegex.test(trimmedText) || phoneRegex.test(trimmedText)) {
                return trimmedText;
            }

            // Ignore text matching any of the patterns
            for (const pattern of ignoreRegexPatterns) {
                if (pattern.test(trimmedText)) {
                    return trimmedText;
                }
            }

            const filteredText = trimmedText.replace(/[^a-zA-Z0-9\s]/g, '');
            const reversedText = filteredText.split('').reverse().join('');

            textDictionary.push({ key: trimmedText, value: reversedText });

            return reversedText;
        });

        await page.goto(url, { waitUntil: 'networkidle2' });

        const translatedHTML = await page.evaluate(async (baseUrl) => {
            const textNodes = [];
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            while (walker.nextNode()) {
                textNodes.push(walker.currentNode);
            }

            for (const node of textNodes) {
                const translatedText = await window.processText(node.nodeValue);
                node.nodeValue = translatedText;
            }

            // Modify all links to be fully qualified URLs
            const links = Array.from(document.querySelectorAll('a[href]'));
            links.forEach(link => {
                const href = link.getAttribute('href');
                const absoluteUrl = new URL(href, baseUrl).href;
                link.setAttribute('href', absoluteUrl);
            });

            return document.documentElement.outerHTML;
        }, url);

        await browser.close();

        await TextDictionary.updateOne(
            { url, language: targetLanguage, userId },
            { $set: { dictionary: textDictionary } },
            { upsert: true }
        );

        return { translatedHTML };
    } catch (error) {
        console.error(`Error in extractAndTranslateText: ${error.message}`);
        throw error;
    }
}

module.exports = extractAndTranslateText;
