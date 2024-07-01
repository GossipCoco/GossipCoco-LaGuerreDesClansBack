const express = require('express');
const Quest = require('../controllers/quest');

const router = express.Router();

router
    .get('/GetTotalQuest', Quest.GetTotalQuest)
    .post('/', Quest.GetAllQuests)
    .get('/:id', Quest.GetQuestById)



module.exports = router;