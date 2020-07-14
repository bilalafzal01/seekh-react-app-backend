const mongoose = require('mongoose');
const mcqSchema = mongoose.Schema({
    statement: String,
    subject: String,
    chapter: String,
    topic: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    correct: String
}, {
    timestamps: true
});
const mcq = mongoose.model('MCQ', mcqSchema);
module.exports = mcq;