const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');
const GetAllEvents = () => {
    console.log("**** GetAllEvents ****");
    return model.Event.findAll({})
  }
  const GetPointParId = (id, data) => {
    console.log("**** GetPointParId ****", id, data);
    const promises = [];
    const createPoints = model.Points.create({
      Id: uuidv4(),
      UserId: id,
      Points: data.points,
      DateEarned: new Date()
    });
    promises.push(createPoints);
    return createPoints
      .then((w) => {
        return model.User.findOne({ where: { Id: id } });
      })
      .then((user) => {
        if (user) {
          const newTotalPoints = user.TotalPoints + data.points;
          return model.User.update({ TotalPoints: newTotalPoints }, { where: { Id: id } });
        } else {
          return Promise.reject('User not found');
        }
      })
      .then((updateResult) => {
        return Promise.all(promises);
      })
      .catch((err) => {
        console.log(err);
        return Promise.reject(err);
      });
  };
module.exports = {
    GetAllEvents,
    GetPointParId
}