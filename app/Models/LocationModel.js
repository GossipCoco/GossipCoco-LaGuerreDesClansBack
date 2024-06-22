const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');
const Location = sequelize.define(
    "Location",
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
    },
    { freezeTableName: true, timestamps: false }
  );
module.exports = Location