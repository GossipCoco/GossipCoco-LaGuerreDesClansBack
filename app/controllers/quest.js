const Quest = {}

const queries = require("../Queries/QuestQueries");


Quest.GetTotalQueries = (req, res) => {
    queries.GetTotalQueries()
    .then((w) => {
      res.send({ob: w.count, res: true }).status(200);
    })
    .catch((err) => {
      console.log("countAlGetTotalQuerieslMyGames",err);
      res.send(err).status(500);
    });
  }

Quest.GetAllQuests = (req, res) => {
    queries.GetAllQuests(req.body)
    .then(w => {
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500)
    })
}

module.exports = Quest