const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');
const Game = sequelize.define(
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
  