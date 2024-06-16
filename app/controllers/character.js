const queries = require('../DataLayer/queries')
const model = require('../DataLayer/models');

const Character = {}
Character.countAllCharacters = (req, res) => {
    queries.countAllCharacters()
        .then(w => {
            const nbResult = Object.keys(w).length

            res.send({ ob: nbResult, res: true }).status(200)
        })
        .catch(err => {
            console.log(err)
            res.send(err).status(500)
        })
}
Character.GetAllCharacters = (req, res) => {
    console.log(req.body)
    queries.GetAllCharacters(req.body.nav)
        .then(w => {
            res.send({ ob: w, res: true }).status(200)
        })
        .catch(err => {
            //console.log(err)
            res.send(err).status(500)
        })
}
Character.GetAllCharactersDashboard = (req, res) => {
    console.log(req.body)
    queries.GetAllCharactersDashboard(req.body.nav)
        .then(w => {
            // console.log("------ W -------", w)
            res.send({ ob: w, res: true }).status(200)
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
            res.send({ ob: w, res: true }).status(200)
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
            res.send({ ob: w, res: true }).status(200)
        })
        .catch(err => {
            //console.log(err)
            res.send(err).status(500)
        })
}

Character.CreateANewCharacter = (req, res) => {
    console.log(req.body)
    const data = req.body;
    const imageFile = req.file;
    if (imageFile) {
        data.Image = imageFile.filename;
    }
    console.log(data)
    queries.CreateANewCharacter(data)
        .then(w => {
            res.send({ ob: w, res: true }).status(200)
        })
        .catch(err => {
            console.log(err)
            res.send(err).status(500)
        })
}
Character.GetAllNamesAndIdsCharacters = (req, res) => {
    queries.GetAllNamesAndIdsCharacters()
        .then((w) => {
            // console.log(w)
            res.send({ ob: w, res: true, message: "GetAllNamesAndIdsCharacters" }).status(200);
        })
        .catch((err) => {
            console.log(err);
            res.send(err).status(500);
        });
}
Character.GetAllCharactersByUser = (req, res) => {
    queries.GetAllCharactersByUser(req.params.id)
        .then((w) => {
            // console.log(w)
            res.send({ ob: w, res: true, message: "GetAllCharactersByUser" }).status(200);
        })
        .catch((err) => {
            console.log(err);
            res.send(err).status(500);
        });
}

module.exports = Character