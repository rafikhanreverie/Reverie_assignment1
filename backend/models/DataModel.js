const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    url: { type: String, required: true },
    language: { type: String, required: true }
});

module.exports = mongoose.model('Data', DataSchema);
