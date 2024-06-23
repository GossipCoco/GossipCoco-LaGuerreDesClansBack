const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const UsersGame = connection.define('UsersGame', {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  GameId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UserId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = UsersGame;