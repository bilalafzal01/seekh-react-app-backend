const express = require('express');
const router = express.Router();
const ChapterController = require('../controllers/ChapterController');

router.get('/all', ChapterController.getChapters);

module.exports = router;