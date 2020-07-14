const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema({
    subject: String,
    chapter: String,
    number: Number
}, {
    timestamps: true
});

const chapter = mongoose.model('Chapter', chapterSchema);
module.exports = chapter;