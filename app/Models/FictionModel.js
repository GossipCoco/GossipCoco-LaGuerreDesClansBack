const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Fiction = connection.define(
    "Fiction",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING,
      },
      Summary: {
        type: DataTypes.TEXT,
      },
      Image: {
        type: DataTypes.STRING,
      },
      DateCreation: {
        type: DataTypes.DATE,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = Fiction