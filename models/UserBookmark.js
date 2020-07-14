const mongoose = require('mongoose');

const userBookmarkSchema = mongoose.Schema({
    userID: String,
    bookmarks: [String]
}, {
    timestamps: true
});

const userBookmark = mongoose.model('UserBookmark', userBookmarkSchema);
module.exports = userBookmark;