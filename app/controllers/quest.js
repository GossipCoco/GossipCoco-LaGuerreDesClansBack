const Quest = {}

const queries = require("../Queries/QuestQueries");

Quest.GetAllQuests = (req, res) => {
    queries.GetAllQuests()
    .then(w => {
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500)
    })
}

module.exports = Quest