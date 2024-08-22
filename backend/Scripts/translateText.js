// Function to reverse the given text
async function reverseText(text) {
    try {
        // Remove non-alphanumeric characters and reverse the text
        const filteredText = text.replace(/[^a-zA-Z0-9\s]/g, '');
        const reversedText = filteredText.split('').reverse().join('');
        
        return reversedText;
    } catch (error) {
        console.error(`Error in reverseText: ${error.message}`);
        throw error;
    }
}

module.exports = reverseText;
