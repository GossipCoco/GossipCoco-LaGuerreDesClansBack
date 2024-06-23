const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');
const Points = connection.define('Points', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User', // 'User' refers to table name
        key: 'Id',
      }
    },
    Points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    DateEarned: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  module.exports = Points