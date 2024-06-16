const express = require('express')

const Character = require('../controllers/character')


const router = express.Router()
const uploadFileMiddleware = require('../middleware/uploadCharacterImage')

router
.post('/allcharacters', Character.GetAllCharacters)
.post('/GetAllCharactersDashboard', Character.GetAllCharactersDashboard)
.get('/countAllcharacters', Character.countAllCharacters)
.get('/GetAllNamesAndIdsCharacters', Character.GetAllNamesAndIdsCharacters)
.get('/:id', Character.GetCharacterByName)
.get('/GetAllCharactersByUser/:id', Character.GetAllCharactersByUser)
.get('/search/:name', Character.GetCharacterByNameSearch)
.post('/createANewCharacter', uploadFileMiddleware.single('image'), Character.CreateANewCharacter)
module.exports = router