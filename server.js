const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 4047;
const http = require('http')
const app = express();
const helmet = require("helmet")
const SocketIOController = require('./app/controllers/socketIOController')



const Home = require('./app/routes/home')
const User = require('./app/routes/user')
const Character = require('./app/routes/character')
const Clan = require('./app/routes/clan')
const Grade = require('./app/routes/grade')
const Image = require('./app/routes/image')
const Game = require('./app/routes/Game')
const Fiction = require('./app/routes/fiction')
const chatgptRouter = require('./app/routes/chatgpt');
const Event = require('./app/routes/event')
const Quest = require('./app/routes/quest')
const imagegenRouter  = require('./app/routes/imagegen');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limite chaque IP à 100 requêtes par windowMs
  message: 'Trop de requêtes créées à partir de cette IP, veuillez réessayer après 15 minutes'
});

const corsOptions = {
  origin: [
    'http://localhost:8081/',
    "http://192.168.1.14:8081",
    "http://172.20.1.151:8081",
    "http://192.168.1.14:8081",
    'http://10.20.0.22:8081',
    'http://192.168.253.153:8081',
    ],
  cors: {
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["gossipCoco"],
    credentials: true
  }
}

app
  .use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  .use(bodyParser.json({ limit: '50mb', extended: true }))
  .use(cors())
  .use('/Home', Home, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/quest', Quest, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/character', Character, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/clan', Clan, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/grade', Grade, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/image', Image, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/game', Game, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/fiction', Fiction, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/api', chatgptRouter, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/api', imagegenRouter, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/event', Event, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use('/user', User, (req, res) => {
    res.json({ message: 'CORS is configured correctly!' });
  })
  .use(helmet())
  .use(limiter)
  .use(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(404).send({ result: 'error' });
  })
  const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };

//sk-proj-FnVZLiN8rhhkaOaV6wtvT3BlbkFJjHwbQkQlDBTdlHVIlJhW <- API Key ChatGPT
const serv = http.createServer(app);
serv.listen(PORT, () => {
  SocketIOController(serv, corsOptions)
  console.log(`Server is running on port ${PORT}.`);
});
