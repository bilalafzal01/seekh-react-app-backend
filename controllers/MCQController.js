const MCQ = require('../models/MCQ');

const getMCQs = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const mcq = await MCQ.find();
        const random = Math.floor(Math.random() * mcq.length);

        // console.log(`Success - random is: ${random}`);
        res.send(mcq[random]);
    } catch (err) {
        const error = new Error(`An error occurred.`);
        error.error = err;
        next(error);
    }
}

const getOneMCQ = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        let subject = null,
            chapter = null,
            topic = null;
        subject = req.query.subject.split('+').join(" ");
        if (req.query.chapter) {
            chapter = req.query.chapter.split('+').join(" ")
        }
        if (req.query.topic) {
            topic = req.query.topic.split('+').join(" ");
        }
        let mcq = '';
        if (chapter == null) {
            mcq = await MCQ.find({
                subject: subject,
            }).limit(5);
        } else if (chapter != null && topic == null) {
            mcq = await MCQ.find({
                $and: [{
                    subject: subject,
                    chapter: chapter,
                }]
            }).limit(5);
        } else {
            mcq = await MCQ.findOne({
                $and: [{
                    subject: subject,
                    chapter: chapter,
                    topic: topic
                }]
            });
        }
        // res.send(`subject: ${subject} - chapter: ${chapter} - topic: ${topic}`)
        res.send(mcq)
    } catch (err) {
        const error = new Error(`An error occurred.`);
        error.error = err;
        next(error);
    }
}

module.exports = {
    getMCQs,
    getOneMCQ
};