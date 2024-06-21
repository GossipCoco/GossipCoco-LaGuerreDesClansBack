const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');
const Grade = sequelize.define(
    "Grade",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
      },
      Image: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );