const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');

const Illustration = sequelize.define(
    "Illustration",
    {
      Id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      DateCreation: {
        type: DataTypes.DATE,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  module.exports = Illustration