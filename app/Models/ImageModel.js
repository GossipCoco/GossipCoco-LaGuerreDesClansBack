const { DataTypes } = require('sequelize');
const sequelize = require('../DataLayer/connectionWithSingleton');

const Image = sequelize.define(
    "Image",
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
  module.exports = Image