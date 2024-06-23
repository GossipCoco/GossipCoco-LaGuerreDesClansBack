const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Event = connection.define('Event', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });
module.exports = Event