const express = require('express');
const User = require('../controllers/user');

const router = express.Router();

router
    .get('/', User.GetAllUsers)
    .get('/:id', User.GetUserById)
    .get('/GemerById/:id', User.GetGamerById)
    .post('/login', User.Login)
    .post('/updateUserInformation/:id', User.UpdateUserInformations)
    .post('/GetMessageByReceiverId/:id', User.GetMessageByReceiverId)
    .post('/ChangeStatusMessage/:id', User.ChangeStatusMessage)

module.exports = router;