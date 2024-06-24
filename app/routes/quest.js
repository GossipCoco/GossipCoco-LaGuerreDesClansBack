const express = require('express');
const Quest = require('../controllers/quest');

const router = express.Router();

router
    .get('/', Quest.GetAllQuests)

module.exports = router;