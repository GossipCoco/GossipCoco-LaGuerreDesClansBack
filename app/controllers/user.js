const jwt = require('jsonwebtoken');
const queries = require('../DataLayer/queries')
const config = require("../config/auth.config.js");
const model = require('../DataLayer/models')
const userApi = require('../middleware/UserApi.js')
const User = {};

User.GetAllUsers = (req, res) => {
  queries.GetAllUsers()
    .then(w => {
      console.log('w.User', w)
      res.send({ ob: w, res: true }).status(200)
    })
    .catch(err => {
      console.log(err)
      res.send(err).status(500)
    })
}
User.GetUserById = (req, res) => {
  const id = req.params.id;
  queries.GetUserById(id)
    .then(w => {
      res.send({ ob: w, res: true }).status(200)
    })
    .catch(err => {
      console.log(err)
      res.send(err).status(500)
    })
}
User.UpdateUserInformations = (req, res) => {
  queries.UpdateUserInformations(req.params.id, req.body)
    .then(w => {
      res.send({ ob: w, res: true }).status(200)
    })
    .catch(err => {
      console.log(err)
      res.send(err).status(500)
    })
}
User.Login = (req, res) => {
  // console.log('req body', req.body)
  const { Email, password } = req.body;
  console.log(req.body)
  const Pwd = req.body.Password
  queries.GetUserByEmail(Email)
    .then(user => {
      console.log(user)
      // console.log("user controller", user.Password)
      console.log("user controller", req.body.Password)
      if (!user) {
        return res.status(404).send({ message: 'User Not Found.' });
      }
      if (user.Password !== req.body.Password) {
        return res.status(401).send({ message: 'Invalid Password!' });
      }
      const result = {
        usrID: user.Id,
        Email: user.Email,
        isSuccess: true,
        tocken: null,
        expire: config.JWT.expire
      }
      const token = jwt.sign({ id: user.Id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      result.tocken = token
      queries.UpdateLastDateConnection(user.Id, user.Email)
      .then(response => {
        console.log(response)
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
      
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};
8338
module.exports = User