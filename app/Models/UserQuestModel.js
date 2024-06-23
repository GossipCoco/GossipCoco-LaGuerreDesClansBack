const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const UserQuest = connection.define('UserQuest', {
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
    QuestId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Quest',
        key: 'Id',
      }
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    DateCompleted: {
      type: DataTypes.DATE,
    }
  }, {
    freezeTableName: true,
    timestamps: false,
  });
module.exports = UserQuest