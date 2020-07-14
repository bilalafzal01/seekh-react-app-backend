const express = require('express');
const router = express.Router();
const MCQController = require('../controllers/MCQController');

router.get('/', MCQController.getMCQs);
router.get('/one', MCQController.getOneMCQ);

module.exports = router;