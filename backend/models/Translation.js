const mongoose = require('mongoose');

const TranslationSchema = new mongoose.Schema({
    url: { type: String, required: true },
    language: { type: String, required: true },
    translatedHTML: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    editedHTML: { type: String }, // Optional field for edited HTML
    createdAt: { type: Date, default: Date.now }
});

// Create a unique index on the combination of url, language, and userId
TranslationSchema.index({ url: 1, language: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('Translation', TranslationSchema);
    