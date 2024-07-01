const express = require('express');
const Quest = require('../controllers/quest');

const router = express.Router();

router
    .post('/', Quest.GetAllQuests)
    .get('/:id', Quest.GetQuestById)
    .get('/GetTotalQueries', Quest.GetTotalQueries)


module.exports = router;