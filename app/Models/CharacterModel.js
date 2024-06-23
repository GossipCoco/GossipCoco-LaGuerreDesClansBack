const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Character = connection.define(
  "Character",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    CurrentName: {
      type: DataTypes.STRING,
    },
    Genre: {
      type: DataTypes.STRING,
    },
    KitName: {
      type: DataTypes.STRING,
    },
    ApprenticeName: {
      type: DataTypes.STRING,
    },
    WarriorName: {
      type: DataTypes.STRING,
    },
    OlderName: {
      type: DataTypes.STRING,
    },
    LeaderName: {
      type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.INTEGER,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Personnality: {
      type: DataTypes.TEXT,
    },
    Biography: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);
  module.exports = Character