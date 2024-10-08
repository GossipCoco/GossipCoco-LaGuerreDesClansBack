const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4047;
const http = require('http')
const app = express();

const SocketIOController = require('./app/controllers/socketIOController')

const Home = require('./app/routes/home')
const User = require('./app/routes/user')
const Character = require('./app/routes/character')
const Clan = require('./app/routes/clan')

const corsOptions = {
  cors: {
    methods: ["GET", "POST"],
    credentials: true
  }
}

app
  .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  .use(bodyParser.json({ limit: '50mb', extended: true })).use(cors())
  .use('/', Home)
  .use('/user', User)
  .use('/character', Character)
  .use('/clan', Clan)

const serv = http.createServer(app);
serv.listen(PORT, () => {
  SocketIOController(serv,corsOptions)
  console.log(`Server is running on port ${PORT}.`);
});
