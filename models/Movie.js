const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
    title: String,
    link: String
}, {
    timestamps: true
});
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;