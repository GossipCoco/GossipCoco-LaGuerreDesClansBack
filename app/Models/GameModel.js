const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const Game = connection.define(
    "Game",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      DateCreation: {
        type: DataTypes.DATE,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Game 
  