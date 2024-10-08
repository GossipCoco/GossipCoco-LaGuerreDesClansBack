const queries = require('../DataLayer/queries')
const model = require('../DataLayer/models');

const Character = {}

Character.GetAllCharacters = (req, res) => {
    queries.GetAllCharacters()
    .then(w => {
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        //console.log(err)
        res.send(err).status(500)
    })
}

Character.GetCharacterByName = (req, res) => {
    const id = req.params.id
    queries.GetCharacterByName(id)
    .then(w => {
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        //console.log(err)
        res.send(err).status(500)
    })
}
Character.GetCharacterByNameSearch = (req, res) => {    
    const id = req.params.name
    //console.log(id)
    queries.GetCharacterByNameSearch(id)
    .then(w => {
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500)
    })
}

Character.CreateANewCharacter = (req, res) => {
    //console.log(req.body)
    queries.CreateANewCharacter(req.body)
    .then(w => {        
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500)
    })
}
module.exports = Character