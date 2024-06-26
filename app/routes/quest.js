const express = require('express');
const Quest = require('../controllers/quest');

const router = express.Router();

router
    .get('/GetTotalQueries', Quest.GetTotalQueries)
    .post('/', Quest.GetAllQuests)

module.exports = router;