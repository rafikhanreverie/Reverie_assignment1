const puppeteer = require('puppeteer');

async function extractAndTranslateText(url, targetLanguage) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    const pageSource = await page.content();

    const translatedHTML = await page.evaluate(async () => {
        const textNodes = [];
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        for (const node of textNodes) {
            const translatedText = node.nodeValue.split('').reverse().join(''); // Simulated translation by reversing text
            node.nodeValue = translatedText;
        }

        return document.documentElement.outerHTML;
    });

    await browser.close();
    return { pageSource, translatedHTML };
}

module.exports = extractAndTranslateText;
