const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Comments = connection.define(
    "Comments",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },    
      Content: {
        type: DataTypes.TEXT,
      },    
      DateCreation: {
        type: DataTypes.DATE,
      },
      updatedAt:{
        type: DataTypes.DATE,
      },
      UserId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'User',
          key: 'Id',
        }
      },
      FictionId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Fiction',
          key: 'Id',
        }
      },
    },
  );
  module.exports = Comments