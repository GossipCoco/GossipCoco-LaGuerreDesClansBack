const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');
const ExistingCharacter = sequelize.define(
    "ExistingCharacter",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      FirstApparition: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );

  module.exports = ExistingCharacter