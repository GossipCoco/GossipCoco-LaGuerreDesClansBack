const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const Chapter = connection.define(
    "Chapter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING,
      },
      Content: {
        type: DataTypes.TEXT,
      },
      Image: {
        type: DataTypes.STRING,
      },
      DateCreation: {
        type: DataTypes.DATE,
      },
      NumberChapter: {
        type: DataTypes.INTEGER
      },
      NbWords: {
        type: DataTypes.INTEGER
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Chapter
  