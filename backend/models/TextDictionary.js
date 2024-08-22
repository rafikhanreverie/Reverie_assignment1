// const mongoose = require('mongoose');

// const TextDictionarySchema = new mongoose.Schema({
//     url: { type: String, required: true },
//     language: { type: String, required: true },
//     userId: { type: mongoose.Schema.Types.ObjectId, required: true },
//     dictionary: { type: Map, of: String }, // Map to store original text as key and translated text as value
//     createdAt: { type: Date, default: Date.now }
// });

// TextDictionarySchema.index({ url: 1, language: 1, userId: 1 }, { unique: true });

// module.exports = mongoose.model('TextDictionary', TextDictionarySchema);



const mongoose = require('mongoose');

const TextDictionarySchema = new mongoose.Schema({
    url: { type: String, required: true },
    language: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    dictionary: [
        {
            key: { type: String, required: true },
            value: { type: String, required: true }
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

TextDictionarySchema.index({ url: 1, language: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('TextDictionary', TextDictionarySchema);
