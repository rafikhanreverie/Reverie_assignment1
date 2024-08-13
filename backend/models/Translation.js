const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TranslationSchema = new Schema({
    url: { 
        type: String, 
        required: true 
    },
    language: { 
        type: String, 
        required: true 
    },
    translatedHTML: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Create an index to ensure each URL-language pair is unique
TranslationSchema.index({ url: 1, language: 1 }, { unique: true });

module.exports = mongoose.model('Translation', TranslationSchema);
