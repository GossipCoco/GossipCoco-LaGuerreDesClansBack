const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Comment = connection.define(
    "Comment",
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
      }
    }
  );
  module.exports = Comment