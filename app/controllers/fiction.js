const queries = require("../Queries/FictionQueries");

const Fiction = {}


Fiction.GetAllFictionsByName = (req, res) => {
  queries.GetAllFictionsByName(req.params.id, req.body)
  .then((w) => {
    res.send({ ob: w, res: true }).status(200);
  })
  .catch((err) => {
    console.log(err);
    res.send(err).status(500);
  });
  
}
Fiction.GetAChapterByName = (req, res) => {
    // console.log(req.params.id)
    queries.GetAChapterByName(req.params.id, req.body)
    .then((w) => {
      res.send({ ob: w, res: true }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send(err).status(500);
    });
}
Fiction.CreateANewChapter = (req, res) => {
  console.log(req.file.filename)
  queries.CreateANewChapter(req.params.id, req.body, req.file.filename)
  .then((w) => {
    res.send({ ob: w, res: true, message: "Chapter created successfully" }).status(200);
  })
  .catch((err) => {
    console.log(err);
    res.send(err).status(500);
  });
}

Fiction.GetLastChapterOfAFiction = (req, res) => {
  console.log(req.params.id)
  queries.GetLastChapterOfAFiction(req.params.id)
  .then((w) => {
    res.send({ ob: w, res: true, message: "Chapter created successfully" }).status(200);
  })
  .catch((err) => {
    console.log(err);
    res.send(err).status(500);
  });
}
Fiction.CountTotalWordBuUser = (req, res) => {
  // console.log(req.params.id)
  queries.CountTotalWordBuUser(req.params.id)
  .then((w) => {
    // console.log(w)
    res.send({ ob: w, res: true, message: "CountTotalWordBuUser" }).status(200);
  })
  .catch((err) => {
    console.log(err);
    res.send(err).status(500);
  });
}


Fiction.CountTotalWordBuUserV2 = (req, res) => {
  // console.log(req.params.id)
  queries.CountTotalWordByUserV2(req.params.id)
  .then((w) => {
    // console.log("CountTotalWordByUserV2", w)
    res.send({ ob: w, res: true, message: "CountTotalWordBuUserV2" }).status(200);
  })
  .catch((err) => {
    console.log("CountTotalWordByUserV2", err);
    res.send(err).status(500);
  });
}
Fiction.GetFiveLastChapByUser = (req, res) => {
  queries.GetFiveLastChapByUser(req.params.id)
  .then((w) => {
    // console.log("CountTotalWordByUserV2", w)
    res.send({ ob: w, res: true, message: "CountTotalWordBuUserV2" }).status(200);
  })
  .catch((err) => {
    console.log("CountTotalWordByUserV2", err);
    res.send(err).status(500);
  });
}
module.exports = Fiction