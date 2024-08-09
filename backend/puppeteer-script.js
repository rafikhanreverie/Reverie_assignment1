const puppeteer = require('puppeteer');
const axios = require('axios');

async function extractAndTranslateText(url, targetLanguage) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Expose translateText to the page context before navigating
    await page.exposeFunction('translateText', async (text) => {
        try {
            const response = await axios.post(
                'https://revapi.reverieinc.com',
                {
                    data: [text],
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'REV-API-KEY': '99425a49d90bbc4829af2934e823ce27b5b46a55',
                        'REV-APP-ID': 'rev.interntesting',
                        'src_lang': 'en',
                        'tgt_lang': targetLanguage,
                        'domain': '1',
                        'REV-APPNAME': 'localization',
                    },
                }
            );
    
            return response.data.responseList[0].outString;
        } catch (error) {
            console.error('Error in translateText:', error.response ? error.response.data : error.message);
            return text; // Return the original text if translation fails
        }
    });

    await page.goto(url, { waitUntil: 'networkidle2' });

    const translatedHTML = await page.evaluate(async (targetLanguage) => {
        const textNodes = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        for (const node of textNodes) {
            const translatedText = await window.translateText(node.nodeValue);
            node.nodeValue = translatedText;
        }

        return document.documentElement.outerHTML;
    });

    await browser.close();
    return { translatedHTML };
}

module.exports = extractAndTranslateText;
