const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Clan = connection.define(
    "Clan",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
      },
      Description: {
        type: DataTypes.TEXT,
      },
      Image: {
        type: DataTypes.STRING,
      },
      Symbol: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Clan