const {
  User,
  Level,
  Role,
  Battle,
  Clan,
  Character,
  Chapter,
  Comments,
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
  GameCharacter,
  FictionIllustration,
  ChapterIllustration,
  RolePermission,
  CharacterImage,
  FictionLocation,
  ChapterLocation,
  Grade,
  Points,
  Quest,
  UserQuest,
  Notification,
  Event,
  UserEvent,
  Prey,
  Ennemy,
  UserGame,
  Rating,
  QuestImage,
  Landscape,
  Background,
  Parallax,
  QuestParallax,
  Faq,
  Message,
  Gamer,
  sequelize: connection,
  Sequelize,
  Utils: {
    Op,
    sequelize,
  },
} = require('./index');
const { hasMany } = require('./UserModel');

// Définir les associations ici
RolePermission.belongsTo(Role, { foreignKey: "Id" });
Role.hasMany(RolePermission);

RolePermission.belongsTo(Permission, { foreignKey: "Id" });
Permission.hasMany(RolePermission);

// USER

User.belongsTo(Level);
Level.hasMany(User);

User.belongsTo(Role, { foreignKey: "RoleId" });
Role.hasMany(User);

User.hasMany(Points, { foreignKey: 'UserId' });
Points.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Notification, { foreignKey: 'UserId' });
Notification.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Message, { foreignKey: 'SenderId' })
Message.belongsTo(Message, { foreignKey: 'SenderId' })

User.hasMany(Message, { foreignKey: 'ReceiverId' })
Message.belongsTo(Message, { foreignKey: 'ReceiverId' })

Gamer.belongsTo(User, {foreignKey: "UserId"})
User.hasMany(Gamer)


// Gamer.belongsTo(Clan, { foreignKey: 'ClanId' })
// Clan.hasMany(Game)

// CHARACTER

Character.belongsTo(Grade, { foreignKey: "GradeId" });
Grade.hasMany(Character)

Character.belongsTo(Clan, { foreignKey: "ClanId" })
Clan.hasMany(Character);


Character.belongsTo(Warrior, { foreignKey: "WarriorId" })
Warrior.hasOne(Character, { foreignKey: "Id" });

Warrior.belongsTo(Clan, { foreignKey: "ClanId" });
Clan.hasMany(Warrior);

Location.belongsTo(Clan,{ foreignKey: "ClanId" });
Clan.hasMany(Location);

// GAME

Fiction.belongsTo(Game, { foreignKey: "GameId" })
Game.hasMany(Fiction)


//FICTION

Fiction.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(Fiction);

Comments.belongsTo(Fiction, { foreignKey: 'FictionId' });
Fiction.hasMany(Comments);


//CHAPTER

Chapter.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(Chapter);

Chapter.belongsTo(Chapter, { foreignKey: "Id" });
Chapter.hasOne(Chapter, { foreignKey: { name: "NextChapterId" } });


//Comments

Comments.belongsTo(User, { foreignKey: "UserId" })
User.hasMany(Comments);


//OTHERS

RelationCharacters.belongsTo(TypeRelation);
TypeRelation.hasMany(RelationCharacters);

Prey.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Prey);

Ennemy.belongsTo(OtherAnimal, { foreignKey: "Id" });
OtherAnimal.hasMany(Ennemy);

Rating.belongsTo(Fiction, { foreignKey: 'FictionId' });
Fiction.hasMany(Rating);

Rating.belongsTo(User, { foreignKey: 'UserId' });
User.hasMany(Rating);

//ASSOCIATION

UserQuest.belongsTo(User, { foreignKey: 'UserId' })
User.hasMany(UserQuest)

UserQuest.belongsTo(Quest, { foreignKey: 'QuestId' })
Quest.hasMany(UserQuest)

QuestImage.belongsTo(Quest, { foreignKey: 'QuestId' })
Quest.hasMany(QuestImage)

QuestParallax.belongsTo(Quest, { foreignKey: 'QuestId' })
Quest.hasMany(QuestParallax)

QuestParallax.belongsTo(Parallax, { foreignKey: 'ParallaxId' })
Parallax.hasMany(QuestParallax)

UserEvent.belongsTo(User, { foreignKey: 'UserId' })
User.hasMany(UserEvent)

UserEvent.belongsTo(Event, { foreignKey: 'EventId' })
Event.hasMany(UserEvent)

UserGame.belongsTo(Game, { foreignKey: 'GameId' });
Game.hasMany(UserGame, { foreignKey: 'GameId' });

UserGame.belongsTo(User, { foreignKey: 'UserId' });
User.hasMany(UserGame, { foreignKey: 'UserId' });

UserCharacter.belongsTo(User, { foreignKey: "UserId" });
User.hasMany(UserCharacter);

UserCharacter.belongsTo(Character, { foreignKey: "CharacterId" });
Character.hasMany(UserCharacter);

GameCharacter.belongsTo(Game, { foreignKey: "GameId" });
Game.hasMany(GameCharacter);

GameCharacter.belongsTo(Character, { foreignKey: "CharacterId" });
Character.hasMany(GameCharacter);

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

CharacterImage.belongsTo(Character, { foreignKey: "CharacterId" })
Character.hasMany(CharacterImage)

CharacterImage.belongsTo(Image, { foreignKey: "ImageId" })
Image.hasMany(CharacterImage)

FictionIllustration.belongsTo(Fiction, { foreignKey: "FictionId" });
Fiction.hasMany(FictionIllustration);

FictionIllustration.belongsTo(Illustration, { foreignKey: "IllustrationId" });
Illustration.hasMany(FictionIllustration);

module.exports = {
  User,
  Level,
  Role,
  Battle,
  Clan,
  Character,
  Chapter,
  Comments,
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
  UserGame,
  GameCharacter,
  FictionIllustration,
  ChapterIllustration,
  RolePermission,
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
  Rating,
  Landscape,
  Background,  
  Parallax,
  QuestParallax,
  Faq,
  sequelize: connection,
  Sequelize,
  Utils: {
    Op,
    sequelize,
  },
}