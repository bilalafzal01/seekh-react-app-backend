const mongoose = require('mongoose');
const subjectSchema = mongoose.Schema({
    subject: String,
}, {
    timestamps: true
});
const subject = mongoose.model('Subject', subjectSchema);
module.exports = subject;