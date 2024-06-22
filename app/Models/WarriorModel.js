const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');
const Warrior = sequelize.define(
    "Warrior",
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