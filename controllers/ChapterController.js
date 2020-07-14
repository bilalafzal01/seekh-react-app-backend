const Chapter = require('../models/Chapter');

const getChapters = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        let subject = null;
        subject = req.query.subject.split('+').join(" ");
        let chapters = await Chapter.find({
            subject: subject
        });
        res.send(chapters);
    } catch (err) {
        const error = new Error(`An error occurred.`);
        error.error = err;
        next(error);
    }
}

module.exports = {
    getChapters
}