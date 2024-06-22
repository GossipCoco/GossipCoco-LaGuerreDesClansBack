const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');
const OriginalCharacter = sequelize.define(
    "OriginalCharacter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      FreeUsing: {
        type: DataTypes.BOOLEAN,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = OriginalCharacter