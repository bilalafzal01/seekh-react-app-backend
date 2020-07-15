const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/one', UserController.postUser);
router.get('/user', UserController.getUser);
router.post('/bookmarkQuestion', UserController.bookmarkQuestion);
router.get('/bookmarks', UserController.getBookmarks);
router.post('/attempt', UserController.storeMCQResult);

module.exports = router;