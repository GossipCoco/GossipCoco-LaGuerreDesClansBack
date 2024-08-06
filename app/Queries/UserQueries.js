const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');


const GetAllUsers = () => {
    return model.User.findAll({
        include: [
            { model: model.Points },
            { model: model.Notification },
            {
                model: model.UserQuest,
                include: [{ model: model.Quest }]
            },
            {
                model: model.UserEvent,
                include: [{
                    model: model.Event
                }]
            },
            {
                model: model.Role,
                include: [
                    {
                        model: model.RolePermission,
                        include: [
                            { model: model.Permission },
                        ],
                    },
                ],
            },
            { model: model.Level },
        ],
    });
};

const GetUserByLogin = (login) => {
    console.log("**** User ****", login);
    return model.User.findOne({
        where: { Login: login },
        include: [
            { model: model.Points },
            { model: model.Notification },
            {
                model: model.UserQuest,
                include: [{ model: model.Quest }]
            },
            {
                model: model.UserEvent,
                include: [{
                    model: model.Event
                }]
            },
            {
                model: model.Role,
                include: [
                    {
                        model: model.RolePermission,
                        include: [
                            { model: model.Permission },
                        ],
                    },
                ],
            },
            { model: model.Level },
        ],
    });
};
const GetUserByEmail = (email) => {
    console.log("**** User ****", email);
    return model.User.findOne({
        where: { Email: email },
        include:[{
            model: model.Role
        }]
    });
};

const GetUserById = (id) => {
    console.log("**** Dashboard ID User ****", id);
    return model.User.findOne({
        where: { Id: id },
        include: [
            { model: model.Gamer},
            {model: model.Message },
            { model: model.Points },
            { model: model.Notification },
            {
                model: model.UserQuest,
                include: [{ model: model.Quest }]
            },
            {
                model: model.UserEvent,
                include: [{
                    model: model.Event
                }]
            },
            {
                model: model.Role,
                include: [
                    {
                        model: model.RolePermission,
                        include: [{ model: model.Permission }],
                    },
                ],
            },
            { model: model.Level }
        ],
    });
};
const GetUserByUsername = (username) => {
    console.log("****GetUserByUsername ID User ****", username);
    return model.User.findOne({
        where: { UserName: username },
        include: [
            { model: model.Points },
            { model: model.Notification },
            {
                model: model.UserQuest,
                include: [{ model: model.Quest }]
            },
            {
                model: model.UserEvent,
                include: [{
                    model: model.Event
                }]
            },
            {
                model: model.Role,
                include: [
                    {
                        model: model.RolePermission,
                        include: [{ model: model.Permission }],
                    },
                ],
            },
            { model: model.Level },
        ],
    });
};
const UpdateLastDateConnection = (usr) => {
    console.log("****UpdateLastDateConnection ID User ****", usr)
    const promises = []
    const date = new Date().toISOString(); // Convertir la date en chaîne
    console.log(date)
    const request = model.User.update({ LastConnexion: date }, { where: { Id: { [model.Utils.Op.like]: `%${usr}%` } } })

    console.log(request)
    promises.push(request)
    return request
        .then(w => { 
            console.log("w", w)
            return Promise.all(promises)
        })
        .catch(err => { console.log("ERROR UpdateLastDateConnection : ", err) })
}
const UpdateUserInformations = (usr, data) => {    
    console.log("****UpdateLastDateConnection ID User ****", usr, data)
}
module.exports = {
    GetAllUsers,
    GetUserByUsername,
    GetUserById,
    GetUserByEmail,
    GetUserByLogin,
    UpdateLastDateConnection,
    UpdateUserInformations
};