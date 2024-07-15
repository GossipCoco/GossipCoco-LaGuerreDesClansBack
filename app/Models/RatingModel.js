const { DataTypes, sequelize } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');


const Rating = connection.define(
    "Rating",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      FictionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      DateRated: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      freezeTableName: true,
      timestamps: false,
    });
    
  
  module.exports = Rating