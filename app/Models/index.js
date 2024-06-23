const { Sequelize, DataTypes, sequelize, Op } = require('sequelize');
const connection = require('../DataLayer/connectionWithSingleton');

const User = require('./UserModel');
const Level = require('./LevelModel');
const Role = require('./RoleModel');
const Battle = require('./BattleModel');
const Clan = require('./ClanModel');
const Character = require('./CharacterModel');
const Chapter = require('./ChapterModel'); // Assurez-vous que ce modèle est correctement défini
const Comment = require('./CommentModel');
const ExistingCharacter = require('./ExistingCharacterModel');
const Fiction = require('./FictionModel');
const Game = require('./GameModel');
const Grade = require('./GradeModel'); // Correction de l'importation
const Illustration = require('./IllustrationModel');
const Image = require('./ImageModel');
const Location = require('./LocationModel');
const OriginalCharacter = require('./OriginalCharacterModel');
const OtherAnimal = require('./OtherAnimalModel');
const Permission = require('./PermissionModel');
const TypeRelation = require('./TypeRelationModel');
const TypeGame = require('./TypeGameModel');
const Warrior = require('./WarriorModel');
const RolePermission = require('./RolePermission')
const RelationCharacters = require('./RelationCharacters')
const UserCharacter = require('./UserCharacter')
const UsersGame = require('./UserCharacter')
const GameCharacter = require('./GameCharacter')
const FictionIllustration = require('./FictionIllustration')
const ChapterIllustration = require('./ChapterIllustration')
const ChapterLocation = require('./ChapterLocation')
const FictionLocation = require('./FictionLocation')
const CharacterImage = require('./CharacterImage')
const Points = require ('./PointsModel')
const Quest = require ('./QuestModel')
const UserQuest = require('./UserQuestModel')
const Notification = require('./NotificationModel')
const Event = require('./EventModel')
const UserEvent = require('./UserEventModel')
const Prey = require('./PreyModel')
const Ennemy = require('./EnnemyModel')

// Exporter les modèles
const models = {
  User,
  Level,
  Role,
  Battle,
  Clan,
  Character,
  Chapter,
  Comment,
  ExistingCharacter,
  Fiction,
  Game,
  Illustration,
  Image,
  Location,
  OriginalCharacter,
  OtherAnimal,
  Permission,
  TypeRelation,
  TypeGame,
  Warrior,
  RelationCharacters,
  UserCharacter,
  UsersGame,
  GameCharacter,
  FictionIllustration,
  ChapterIllustration,
  RolePermission,
  CharacterImage,
  FictionLocation,
  ChapterLocation,
  Grade,
  CharacterImage,
  Points,
  Quest,
  UserQuest,
  Notification,
  Event,
  UserEvent,
  Prey,
  Ennemy,
  sequelize: connection,
  Sequelize,
  Utils: {
    Op,
    sequelize,
  },
};

module.exports = models;