const mongoose = require('mongoose');

const TranslationSchema = new mongoose.Schema({
    url: { type: String, required: true },
    language: { type: String, required: true },
    translatedHTML: { type: String, required: true },
    editedHTML: { type: String }, // Optional field for edited HTML    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Translation', TranslationSchema);
