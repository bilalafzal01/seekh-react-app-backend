const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/one', UserController.postUser);
router.post('/bookmarkQuestion', UserController.bookmarkQuestion);
router.get('/bookmarks', UserController.getBookmarks);

module.exports = router;