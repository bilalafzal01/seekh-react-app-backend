const Movie = require('../models/Movie');

const getMovie = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    try {
        const movie = await Movie.find();
        console.log(`Success`);
        console.log(movie[0]);
        res.json(movie);
    } catch (err) {
        const error = new Error(`An error occurred.`);
        error.error = err;
        next(error);
    }
}

const addMovie = async (req, res, next) => {
    const {
        title,
        link
    } = req.body;
    const newMoive = new Movie({
        title,
        link
    });
    try {
        await newMoive.save();
        res.send({
            message: `Successfully added!`,
            movie: newMoive
        });
    } catch (err) {
        const error = new Error(`An error occurred. Movie not added.`);
        error.error = err;
        next(error);
    }
}

module.exports = {
    getMovie,
    addMovie
};