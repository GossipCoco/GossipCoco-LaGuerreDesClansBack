const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

/**
 * 
 * @returns {Object}
 */
const GetTotalQueries = () => {    
    console.log("******** GetAllQuests ********")
    const promises = []
    const request = model.Quest.findAndCountAll({})
    promises.push(request)
    return request
      .then(w => {
        const nbResult = Object.keys(w.rows).length
        console.log(nbResult)
        return { count: nbResult }
      })
      .catch(err => {
        console.log("ERROR: ", err)
      })

}
/**
 * 
 * @param {Object} nav 
 * @returns {Object}
 */
const GetAllQuests = (nav) => {
    console.log("******** GetAllQuests ********", nav)
    return model.Quest.findAll({
        offset: nav.step * nav.current,
        limit: nav.step,
        include: [{
            model: model.QuestImage
        }]
    })
}
module.exports = {
    GetAllQuests,
    GetTotalQueries
}
