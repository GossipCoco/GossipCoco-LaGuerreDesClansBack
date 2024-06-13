const queries = require("../DataLayer/queries");
const model = require('../DataLayer/models');
const uploadFileAvatar = require("../middleware/uploadFictionsImage");
const Game = {}

Game.GetAllGames = (req, res) => {
    queries.GetAllGames(req.body)
    .then((w) => {
        res.send({ ob: w, res: true }).status(200);
      })
      .catch((err) => {
        console.log(err);
        res.send(err).status(500);
      });
}
Game.GetAllGamesByUser = (req, res) => {
  console.log("req.body", req.body)
  queries.GetAllGamesByUser(req.params.id,  req.body)
  .then((w) => {
    res.send({ ob: w, res: true }).status(200);
  })
  .catch((err) => {
    console.log(err);
    res.send(err).status(500);
  });
  
}
Game.countAllMyGames = (req, res) => {
  queries.countAllMyGames(req.params.id)
  .then((w) => {
    res.send({ob: w.count, res: true }).status(200);
  })
  .catch((err) => {
    console.log(err);
    res.send(err).status(500);
  });
}
Game.countAllGames = (req, res) => {
  queries.countAllGames()
  .then((w) => {
    res.send({ob: w.count, res: true }).status(200);
  })
  .catch((err) => {
    console.log(err);
    res.send(err).status(500);
  });
}
Game.CreateANewGame = (req, res) => {
  console.log("CreateANewGame", req.file)

  // const { Title, Summary } = req.body; // Destructure additional data if needed

  console.log("CreateANewGame", req.file);
  const UserId = req.params.id;
  const imagePath = req.file ? req.file.filename : null; // Get the path of the uploaded image if present

  // Destructure additional data if needed
  const { Title, Summary, FirstCharacterId, SecondCharacterId, LocationId } = req.body;

  // Check if the necessary fields are provided
  if (!Title || !Summary || !FirstCharacterId || !SecondCharacterId) {
    return res.status(400).send({ message: "All fields are required" });
  }

  const data = { Title, Summary, FirstCharacterId, SecondCharacterId, LocationId };

  queries.CreateANewGame(UserId, data, imagePath)
    .then((result) => {
      res.status(200).send({ message: "Game created successfully", data: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
    
}

Game.GetFiveLastGameByUser = (req, res) => {
  queries.GetFiveLastGameByUser(req.params.id)
  .then((result) => {
    // console.log(result)
    res.status(200).send({ message: "Game created successfully", data: result });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
}
Game.GetAllLastFiveGames = (req, res) => {
  console.log("GetAllLastFiveGames : ", req.body)
  queries.GetAllLastFiveGames(req.body)
  .then((result) => {
    // console.log(result)
    res.status(200).send({ message: "Game created successfully", data: result });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
}
Game.AddANewCharacterToGameAndFiction = (req, res) => {
  console.log(req.params.id)
  queries.AddANewCharacterToGameAndFiction(req.params.id, req.body)
  .then((result) => {
    // console.log(result)
    res.status(200).send({ message: "AddANewCharacterToGameAndFiction", data: result });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
}
module.exports = Game