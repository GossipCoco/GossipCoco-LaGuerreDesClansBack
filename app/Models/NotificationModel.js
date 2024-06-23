const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Notification = connection.define('Notification', {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User',
        key: 'Id',
      }
    },
    Message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    DateCreated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    Read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });

  module.exports = Notification