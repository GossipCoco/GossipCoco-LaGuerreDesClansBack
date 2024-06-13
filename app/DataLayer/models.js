const { DataTypes, sequelize, Op } = require("sequelize");
const Sequelize = require('sequelize');

const connection = require("./connectionWithSingleton");

const User = connection.define(
  "User",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    LastName: {
      type: DataTypes.STRING,
    },
    FirstName: {
      type: DataTypes.STRING,
    },
    Login: {
      type: DataTypes.STRING,
    },
    Email: {
      type: DataTypes.STRING,
    },
    Password: {
      type: DataTypes.STRING,
    },
    UserName: {
      type: DataTypes.STRING,
    },
    Avatar: {
      type: DataTypes.STRING,
    },
    Birthday: {
      type: DataTypes.DATE,
    },
    Inscription: {
      type: DataTypes.DATE,
    },
    LastConnexion: {
      type: DataTypes.DATE,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Biography: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Level = connection.define(
  "Level",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Role = connection.define(
  "Role",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Permission = connection.define(
  "Permission",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Permission: {
      type: DataTypes.INTEGER,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Character = connection.define(
  "Character",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    CurrentName: {
      type: DataTypes.STRING,
    },
    Genre: {
      type: DataTypes.STRING,
    },
    KitName: {
      type: DataTypes.STRING,
    },
    ApprenticeName: {
      type: DataTypes.STRING,
    },
    WarriorName: {
      type: DataTypes.STRING,
    },
    OlderName: {
      type: DataTypes.STRING,
    },
    LeaderName: {
      type: DataTypes.STRING,
    },
    Age: {
      type: DataTypes.INTEGER,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Personnality: {
      type: DataTypes.TEXT,
    },
    Biography: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const RelationCharacters = connection.define(
  "RelationCharacters",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const TypeRelation = connection.define(
  "TypeRelation",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const ExistingCharacter = connection.define(
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

const OriginalCharacter = connection.define(
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

const KittyPet = connection.define(
  "KittyPet",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Loner = connection.define(
  "Loner",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Warrior = connection.define(
  "Warrior",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Clan = connection.define(
  "Clan",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
    Symbol: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Grade = connection.define(
  "Grade",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Location = connection.define(
  "Location",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const OtherAnimal = connection.define(
  "OtherAnimal",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Prey = connection.define(
  "Prey",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Ennemy = connection.define(
  "Ennemy",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const UserCharacter = connection.define(
  "UserCharacter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Game = connection.define(
  "Game",
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

const GameCharacter = connection.define(
  "GameCharacter",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);


const Illustration = connection.define(
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

const FictionIllustration = connection.define(
  "FictionIllustration",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
const ChapterIllustration = connection.define(
  "ChapterIllustration",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Fiction = connection.define(
  "Fiction",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Title: {
      type: DataTypes.STRING,
    },
    Summary: {
      type: DataTypes.TEXT,
    },
    Image: {
      type: DataTypes.STRING,
    },
    DateCreation: {
      type: DataTypes.DATE,
    },
  },
  { freezeTableName: true, timestamps: false }
);

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

const Battle = connection.define(
  "Battle",
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
  },
  { freezeTableName: true, timestamps: false }
);

const UsersGame = connection.define(
  "UsersGame",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const RolePermission = connection.define(
  "RolePermission",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

const Image = connection.define(
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
const TypeGame = connection.define(
  "TypeGame",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
const FictionLocation = connection.define(
  "FictionLocation",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
const ChapterLocation = connection.define(
  "ChapterLocation",
  {
    Id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);
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
    },
  },{ freezeTableName: true, timestamps: false });

User.belongsTo(Level);
Level.hasMany(User);

User.belongsTo(Role);
Role.hasMany(User);

ExistingCharacter.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(ExistingCharacter, { foreignKey: "Id" });

OriginalCharacter.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(OriginalCharacter, { foreignKey: "Id" });

OriginalCharacter.belongsTo(User);
User.hasMany(OriginalCharacter);

KittyPet.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(KittyPet, { foreignKey: "Id" });

Loner.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(Loner, { foreignKey: "Id" });

Warrior.belongsTo(Character, { foreignKey: "Id" });
Character.hasOne(Warrior, { foreignKey: "Id" });

Warrior.belongsTo(Clan);
Clan.hasMany(Warrior);

KittyPet.belongsTo(Clan);
Clan.hasMany(KittyPet);

Loner.belongsTo(Clan);
Clan.hasMany(Loner);

Location.belongsTo(Clan);
Clan.hasMany(Location);

Character.belongsTo(Grade);
Grade.hasMany(Character);

UserCharacter.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(UserCharacter);

UserCharacter.belongsTo(Character, { foreignKey: "CharacterId" });
Character.hasMany(UserCharacter);

GameCharacter.belongsTo(Game, { foreignKey: "GameId" });
Game.hasMany(GameCharacter, { foreignKey: "GameId" });

GameCharacter.belongsTo(Character, { foreignKey: "CharacterId" });
Character.hasMany(GameCharacter, { foreignKey: "CharacterId" });

RelationCharacters.belongsTo(Character, { foreignKey: "IdCharacterOne" });
Character.hasMany(RelationCharacters);

RelationCharacters.belongsTo(Character, { foreignKey: "IdCharacterTwo" });
Character.hasMany(RelationCharacters);

ChapterIllustration.belongsTo(Chapter, { foreignKey: "ChapterId" });
Chapter.hasMany(ChapterIllustration);

ChapterIllustration.belongsTo(Illustration, { foreignKey: "IllustrationId" });
Chapter.hasMany(ChapterIllustration);

FictionLocation.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(FictionLocation);

FictionLocation.belongsTo(Location, { foreignKey: "LocationId" });
Location.hasMany(FictionLocation);

ChapterLocation.belongsTo(Chapter, { foreignKey: "ChapterId" });
Chapter.hasMany(ChapterLocation);

ChapterLocation.belongsTo(Location, { foreignKey: "LocationId" });
Location.hasMany(ChapterLocation);


FictionIllustration.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(FictionIllustration);

FictionIllustration.belongsTo(Illustration, { foreignKey: "IllustrationId" });
Illustration.hasMany(FictionIllustration);

RelationCharacters.belongsTo(TypeRelation);
TypeRelation.hasMany(RelationCharacters);

Prey.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Prey);

Ennemy.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Ennemy);

UsersGame.belongsTo(Game, { foreignKey: "GameId" });
Game.hasMany(UsersGame, { foreignKey: "GameId" });

UsersGame.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(UsersGame, { foreignKey: "UserId" });

Fiction.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Fiction, { foreignKey: "UserId" });

Comment.belongsTo(User, { foreignKey: "UserId" })
User.hasMany(Comment, { foreignKey: "UserId" });


Comment.belongsTo(Fiction, { foreignKey: "FictionId" })
Fiction.hasMany(Comment, { foreignKey: "FictionId" });


Comment.belongsTo(Chapter, { foreignKey: "ChapterId" })
Chapter.hasMany(Comment, { foreignKey: "FictionId" });

Game.hasMany(Fiction)
Fiction.belongsTo(Game, { foreignKey: "GameId" })

Chapter.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(Chapter);

Chapter.belongsTo(Chapter, { foreignKey: "Id" });
Chapter.hasOne(Chapter, { foreignKey: { name: "NextChapterId" } });

RolePermission.belongsTo(Role, { foreignKey: "Id" });
Role.hasMany(RolePermission);

RolePermission.belongsTo(Permission, { foreignKey: "Id" });
Permission.hasMany(RolePermission);



const models = {
  User,
  Permission,
  Role,
  RolePermission,
  Character,
  ExistingCharacter,
  OriginalCharacter,
  Grade,
  Location,
  Level,
  UserCharacter,
  RelationCharacters,
  TypeRelation,
  OtherAnimal,
  Prey,
  Ennemy,
  Game,
  Fiction,
  Chapter,
  UsersGame,
  GameCharacter,
  KittyPet,
  Loner,
  Warrior,
  Clan,
  Battle,
  Image,
  TypeGame,
  Illustration,
  FictionIllustration,
  ChapterIllustration,
  FictionLocation,
  ChapterLocation,
  Comment,
  Sequelize,
  Utils: {
    Op,
    sequelize,
  },
};
module.exports = models;
