const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllQuests = () => {
    return model.Quest.findAll({})
}
module.exports = {
    GetAllQuests
}
