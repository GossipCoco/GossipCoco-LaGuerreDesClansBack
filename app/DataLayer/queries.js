const { Sequelize } = require("./connection");
const model = require("./models");
const modelFull = require("./modelsFulls");

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

console.log("------- uuidv4 ------ : ", uuidv4())

// Utilisation de uuidv7 pour générer un UUID
// const newUUID = uuidv7();
// console.log(newUUID);


/**
 * 
 * @returns Object
 */
const GetAllImagesTable = () => {
  const promise = [];
  const request = model.Image.findAndCountAll({});
  promise.push(request);
  return request
    .then((w) => {
      const nbResult = Object.keys(w.rows).length;
      return { count: nbResult, row: w };
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
};

const GetAllUsers = () => {
  console.log("**** All Users ****");
  return model.User.findAll({
    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [
              { model: model.Permission },
            ],
          },
        ],
      },
      { model: model.Level, },
      {
        model: model.OriginalCharacter,
        include: {
          model: model.Character,
          include: modelFull.CharacterInfo,
        },
      },
    ],
  });
};
const GetUserByLogin = (login) => {
  console.log("**** User ****", login);
  return model.User.findOne({
    where: { Login: login },
    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [
              { model: model.Permission },
            ],
          },
        ],
      },
      { model: model.Level },
    ],
  });
};
const GetUserByEmail = (email) => {
  console.log("**** User ****", email);
  return model.User.findOne({
    where: { Email: email },
    // include: [
    //   {
    //     model: model.Role,
    //     include: [
    //       {
    //         model: model.RolePermission,
    //         include: [{ model: model.Permission, }],
    //       },
    //     ],
    //   },
    //   { model: model.Level },
    // ],
  });
};
const UpdateLastDateConnection = (usr) => {
  console.log("UpdateLastDateConnection", usr)
  const promises = []
  const date = new Date()
  const request = model.User.update({ LastConnexion: date }, { where: { Id: usr } })
  promises.push(request)
  return request
    .then(w => { return Promise.all(promises) })
    .catch(err => { console.log("ERROR UpdateLastDateConnection : ", err) })

}
const GetUserById = (id) => {
  console.log("**** ID User ****", id);
  return model.User.findOne({
    where: { Id: id, },
    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [{ model: model.Permission }],
          },
        ],
      },
      { model: model.Level },
      {
        model: model.OriginalCharacter,
        include: {
          model: model.Character,
          include: modelFull.CharacterInfo,
        },
      },
    ],
  });
};
const GetUserByUsername = (username) => {
  console.log("**** ID User ****", username);
  return model.User.findOne({
    where: { UserName: username },
    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [{ model: model.Permission }],
          },
        ],
      },
      { model: model.Level },
      {
        model: model.OriginalCharacter,
        include: {
          model: model.Character,
          include: modelFull.CharacterInfo,
        },
      },
    ],
  });
};
const countAllCharacters = () => {
  console.log("test countAllCharacters");
  return model.Character.findAll({});
};
const countAllMyGames = (usr) => {
  console.log("countAllMyFictions", usr);
  const promises = []
  const request = model.Game.findAndCountAll({
    include: [
      {
        model: model.UsersGame,
        where: {
          UserId: { [model.Utils.Op.like]: `%${usr}%` },
        },
      },
    ]
  });
  promises.push(request)
  return request
    .then(w => {
      const nbResult = Object.keys(w.rows).length
      return { count: nbResult }
    })
    .catch(err => {
      console.log("ERROR: ", err)
    })
};

const countAllGames = () => {
  console.log("countAllGames");
  const promises = []
  const request = model.Game.findAndCountAll({});
  promises.push(request)
  return request
    .then(w => {
      const nbResult = Object.keys(w.rows).length
      return { count: nbResult }
    })
    .catch(err => {
      console.log("ERROR: ", err)
    })
};

const GetAllCharacters = (nav) => {
  console.log("GetAllCharacters", nav.step)
  return model.Character.findAll({
    offset: nav.step * nav.current,
    limit: nav.step,
    include: [
      { model: model.Grade },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [{ model: model.Location }],
            order: [["Id", "ASC"]],
          },
        ],
        order: [["ClanId", "ASC"]],
      },
      { model: model.ExistingCharacter },
      { model: model.OriginalCharacter, include: [{ model: model.User }] },
    ],
  });
};
const GetAllCharactersDashboard = (nav) => {
  console.log("GetAllCharactersDashboard", nav.step)
  const promises = []
  const query = model.Character.findAll({
    attributes: ['Id', 'CurrentName', 'Image'],
  });
  promises.push(query)
  return query
    .then(w => {
      return Promise.all(promises);
    })
    .catch(err => {
      console.log("ERROR: ", err)
      return Promise.reject(err);
    })

};
const GetAllNamesAndIdsCharacters = () => {
  return model.Character.findAll({
    attributes: ['Id', 'CurrentName'],
    order: [["CurrentName", "ASC"]]
  })
}
const GetAllCharactersByUser = (user) => {
  return model.Character.findAll({
    include: [
      {
        model: model.UserCharacter,
        where: { UserId: user }
      },
      { model: model.Grade },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [{ model: model.Location }],
            order: [["Id", "ASC"]],
          },
        ],
        order: [["ClanId", "ASC"]],
      },
    ],
  });
};

const GetCharacterByName = (name) => {
  console.log("**** Character ****", name);
  return model.Character.findAll({
    where: { Id: { [model.Utils.Op.like]: name } },
    include: [
      { model: model.Grade },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [{ model: model.Location }],
            order: [["Id", "ASC"]],
          },
        ],
        order: [["ClanId", "ASC"]],
      },
      { model: model.ExistingCharacter },
      {
        model: model.OriginalCharacter,
        include: [{ model: model.User }],
      },
    ],
  });
};

const GetCharacterByNameSearch = (name) => {
  console.log("**** Character ****", name);
  return model.Character.findAll({
    where: { CurrentName: { [model.Utils.Op.like]: `%${name}%` } },
    include: [
      { model: model.Grade },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [{ model: model.Location }],
          },
        ],
      },
      { model: model.ExistingCharacter },
      {
        model: model.OriginalCharacter,
        include: [{ model: model.User }],
      },
    ],
  });
};
const GetAllCharactersByNameGradeAndClan = (data) => {
  console.log("GetAllCharactersByNameGradeAndClan", data);
}
const CreateANewCharacter = (data) => {
  console.log("CreateANewCharacter", data);
  const promises = [];
  let Name = data.CurrentName;
  var str = Name.replace(/\s+/g, '');
  const newCharacter = {
    Id: str,
    CurrentName: Name,
    Genre: data.Genre,
    KitName: data.KitName,
    ApprenticeName: data.ApprenticeName,
    WarriorName: data.WarriorName,
    OlderName: data.OlderName,
    LeaderName: data.LeaderName,
    Age: data.Age,
    Description: data.Description,
    Personnality: data.Personnality,
    Biography: data.Biography,
    Image: data.Image,
    GradeId: data.Grade,
    GradeId: data.Grade
  };
  const characterCreated = model.Character.create(newCharacter);
  promises.push(characterCreated);
  return characterCreated
    .then((w) => {
      const Warrior = {
        Id: str,
        Name: Name,
        Image: data.Image.name,
        ClanId: data.Clan,
      };
      console.log(Warrior);
      const WarriorCreated = model.Warrior.create(Warrior)
      promises.push(WarriorCreated)
      return WarriorCreated
        .then((w) => {
          return Promise.all(promises)
        }
        ).catch((err) => {
          console.log(err)
          //res.send(err).status(500);
        });
    })
    .catch((err) => {
      console.log(err)
      //res.send(err).status(500);
    });
};
const GetAllClans = () => {
  return model.Clan.findAll({
    order: [
      ['Name', 'ASC'],
    ],
    include: [
      {
        model: model.Location,
      },
    ],
    order: [["Name", "ASC"]],
  });
};
const GetClanById = (id) => {
  return model.Clan.findOne({
    where: { Id: id },
    include: [
      {
        model: model.Location,
      },
      {
        model: model.Warrior,
        attributes: ['Name'],
        include: [
          {
            model: model.Character,
            attributes: ['CurrentName', 'Image'],
          },
        ],
      },
    ],
  });
};

const GetClanByNameClan = (name) => {
  return model.Clan.findOne({
    where: { Name: { [model.Utils.Op.like]: `%${name}%` } },
    include: [
      {
        model: model.Location,
      },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Character,
          },
        ],
      },
    ],
  });
};

const UploadUserAvatar = (data, id) => {
  console.log("UploadUserAvatar", data, id);
  const promises = [];
  const newRequest = model.User.update({ Avatar: data }, { where: { Id: id } });
  promises.push(newRequest);
  return newRequest
    .then((w) => {
      return Promise.all(promises);
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
};
const GetAllImages = () => {
  return model.Image.findAll({});
};
const GetAllGrades = () => {
  return model.Grade.findAll({
    order: [
      ['Name', 'ASC'],
    ],
  })
}
const GetAllLocations = () => {
  console.log("**** GetAllLocations ****");
  return model.Location.findAll({})
}
const GetAllGames = (nav) => {
  console.log("**** All Games ****");
  console.log('nav : ', nav, nav.step * nav.current, nav.step)
  return model.Game.findAll({
    offset: nav.step * nav.current,
    limit: nav.step,
    include: [
      {
        model: model.Fiction,
        order: [["Title", "ASC"]],
        include: [{
          model: model.Chapter
        }]
      },
      {
        model: model.UsersGame,
        include: [{
          model: model.User, attributes: ['Id', 'UserName']

        }]
      }
    ],

  });
};

const GetAllLastFiveGames = (nav) => {
  console.log("**** GetAllLastFiveGames **** nav : ", nav.step);

  return model.Game.findAll({
    offset: nav.step,
    limit: nav.step,
    attributes: ['Id'],
    include: [
      {
        model: model.Fiction,

        attributes: ['Id', 'Title', 'Summary', 'Image', 'DateCreation'],
        order: [["DateCreation", "DESC"]],
      },
      {
        model: model.UsersGame,
        include: [{
          model: model.User,
          attributes: ['Id', 'UserName'],
        }]
      }
    ],

  });
};

const GetAllGamesByUser = (user, nav) => {
  console.log("**** All Games By UseR****", user, nav);
  console.log("user, nav, filter", user, nav)
  return model.Game.findAll({
    offset: nav.step * nav.current,
    limit: nav.step,
    include: [
      {
        model: model.GameCharacter,
        include: [
          {
            model: model.Character,
          },
        ],
      },
      {
        model: model.Fiction,
        order: ['Title'],
        include: [{ model: model.Chapter }],
      },
      {
        model: model.UsersGame,
        where: {
          UserId: { [model.Utils.Op.like]: `%${user}%` },
        },
        include: [{ model: model.User, attributes: ['Id', 'UserName'] }],
      },
    ],
  });
};

const GetAllFictionsByName = (name, nav) => {
  console.log("**** GetAllFictionsByName ****", name, nav);
  console.log(name, nav)
  return model.Fiction.findOne({
    where: {
      Id: { [model.Utils.Op.like]: `%${name}%` },
    },
    include: [
      { model: model.FictionIllustration },
      { model: model.Chapter },
      { model: model.User, attributes: ['Id', 'UserName'] },
      {
        model: model.Game,
        include: [
          {
            model: model.UsersGame,
            attributes: ['Id', 'UserId'],
            include: [{
              model: model.User,
              attributes: ['Id', 'UserName']
            }],
          },
          {
            model: model.GameCharacter,
            attributes: ['Id'],
            include: [
              {
                model: model.Character,
                attributes: ['Id', 'CurrentName', 'Image'],
                include: [
                  { model: model.Grade },
                  {
                    model: model.Warrior,
                    include: [{ model: model.Clan }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
};
const GetAChapterByName = (name, nav) => {
  console.log("**** GetAChapterByName ****");
  console.log(name, nav)
  return model.Chapter.findOne({
    where: {
      [model.Utils.Op.or]: [
        { Id: { [model.Utils.Op.like]: `%${name}%` }, },
        { Title: { [model.Utils.Op.like]: `%${name}%` }, }
      ]
    },
    include: [
      {
        model: model.ChapterIllustration,
        include: [{ model: model.Illustration }]
      },
      {
        model: model.ChapterLocation,
        include: [{
          model: model.Location
        }]
      },
      {
        model: model.Fiction,
        attributes: ['UserId'],
        include: [
          { model: model.FictionIllustration },
          {
            model: model.User,
            attributes: ['Id', 'UserName']
          }]
      }]
  });
};
const CreateANewGame = (UserId, data, imagePath) => {
  console.log("**** CreateANewGame ****", UserId, data, imagePath);
  const date = new Date();
  const promises = [];
  const gameId = uuidv4();

  const requestNewGame = {
    Id: gameId,
    DateCreation: date,
    TypeGameId: 'Fiction'
  };

  const firstRequest = model.Game.create(requestNewGame);
  const requestIllustration = {
    Id: imagePath,
    DateCreation: new Date()
  }
  promises.push(firstRequest);
  return firstRequest
    .then(() => {
      const FictionId = uuidv4()
      const requestNewFiction = {
        Id: FictionId, // Nouvelle clé primaire pour Fiction
        Title: data.Title,
        Summary: data.Summary,
        Image: imagePath,  // Use the filename from multer
        GameId: gameId,
        DateCreation: date,
        UserId: UserId
      };

      const requestUserGame = {
        Id: uuidv4(), // Nouvelle clé primaire pour UsersGame
        GameId: gameId,
        UserId: UserId
      };

      const requestFirstGameCharacter = {
        Id: uuidv4(), // Nouvelle clé primaire pour GameCharacter
        GameId: gameId,
        CharacterId: data.FirstCharacterId
      };

      const requestSecondGameCharacter = {
        Id: uuidv4(), // Nouvelle clé primaire pour GameCharacter
        GameId: gameId,
        CharacterId: data.SecondCharacterId
      };
      const IllustrationRequest = {
        Id: imagePath,
        DateCreation: new Date()
      }

      // const requestLocation = {
      //   Id: uuidv4(), 
      //   LocationId: data.LocationId,
      //   FictionId: requestNewFiction.Id
      // };
      const secondRequest = model.Fiction.create(requestNewFiction);
      const thirdRequest = model.UsersGame.create(requestUserGame);
      const fourRequest = model.GameCharacter.create(requestFirstGameCharacter)
      const fiveRequest = model.GameCharacter.create(requestSecondGameCharacter)

      // const sixRequest = model.FictionLocation.create(requestLocation)
      const sevenRequest = model.Illustration.create(IllustrationRequest)


      promises.push(secondRequest);
      return secondRequest
        .then(() => {
          promises.push(thirdRequest);
          return thirdRequest
            .then(() => {
              promises.push(fourRequest)
              return fourRequest
                .then(() => {
                  promises.push(fiveRequest)
                  return fiveRequest
                    .then(() => {
                      // return Promise.all(promises);
                      promises.push(sevenRequest)
                      return sevenRequest
                        .then(() => {
                          const IllustrationFictionRequest = {
                            Id: uuidv4(), // Nouvelle clé primaire pour GameCharacter
                            FictionId: FictionId,
                            IllustrationId: imagePath
                          }
                          const eightRequest = model.FictionIllustration(IllustrationFictionRequest)
                          promises.push(eightRequest)
                          return eightRequest
                            .then(() => {
                              const _RequestIllustratio = model.Illustration.create(requestIllustration)
                              const requestFicIllustration = {
                                Id:uuidv4(),
                                FictionId: FictionId,
                                IllustrationId: imagePath
                              }
                              promises.push(_RequestIllustratio)
                              return requestFicIllustration
                                .then(() => {
                                  Promise.all(promises)
                                }).catch((err) => {
                                  console.log(err);
                                  return Promise.reject(err);
                                });


                              return Promise.all(promises);
                            }
                            ).catch((err) => {
                              console.log(err);
                              return Promise.reject(err);
                            });

                        })
                        .catch((err) => {
                          console.log(err);
                          return Promise.reject(err);
                        });
                    })
                    .catch((err) => {
                      console.log(err);
                      return Promise.reject(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                  return Promise.reject(err);
                });
            });
        })
        .catch((err) => {
          console.log(err);
          return Promise.reject(err);
        });
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}
const AddANewCharacterToGameAndFiction = (Id, data) => {
  console.log("**** AddANewCharacterToGameAndFiction ****", Id, data);
  const promises = []
  const requestFirstGameCharacter = {
    Id: Id + ' - ' + data.CharacterId,
    GameId: Id,
    CharacterId: data.CharacterId
  }
  console.log(requestFirstGameCharacter)
  const request = model.GameCharacter.create(requestFirstGameCharacter)
  promises.push(request)
  return request
    .then(() => {
      return Promise.all(promises);
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });

}
const GetLastChapterOfAFiction = (FictionId) => {
  console.log("**** GetLastChapterOfAFiction ****", FictionId);
  return model.Chapter.findOne({
    where: {
      FictionId: FictionId,
      NextChapterId: null
    },
    include: [{
      model: model.ChapterLocation,
      include: [{
        model: model.Location
      }]
    }]
  })
}
const GetFiveLastGameByUser = (usr) => {
  console.log("**** GetFiveLastGameByUser ****", usr);
  console.log(new Date(new Date() - 24 * 60 * 60 * 20000))
  return model.Game.findAll({
    limit: 3,
    attributes: ['Id', 'DateCreation'],
    order: [['DateCreation', 'DESC']],
    where: {
      TypeGameId: 'Fiction',
    },
    include: [
      {
        model: model.UsersGame,
        where: {
          UserId: { [model.Utils.Op.like]: `%${usr}%` },
        },
        attributes: ['UserId'],
        include: [{
          model: model.User,
          attributes: ['Id', 'UserName']
        }]
      },
      {
        model: model.Fiction,
        attributes: ['Id', 'Title', 'Summary', 'Image'],
      }]
  })
}
const GetFiveLastChapByUser = (usr) => {
  console.log("**** GetFiveLastChapByUser ****", usr);
  console.log(new Date(new Date() - 24 * 60 * 60 * 20000))
  return model.Chapter.findAll({
    limit: 3,
    attributes: ['Id', 'Title', 'DateCreation', 'Image'],
    order: [['DateCreation', 'DESC']],
    include: [{
      model: model.Fiction,
      attributes: ['Id', 'Title', 'Image'],
      where: { UserId: { [model.Utils.Op.like]: `%${usr}%` } }
    }]
  })
}

const CreateANewChapter = (FictionId, data, imagePath) => {
  console.log("**** CreateANewChapter ****", FictionId, data, imagePath);
  const date = new Date()
  const promises = []
  const newChapter = {
    Id: data.Id,
    Title: data.Title,
    Content: data.Content,
    Image: imagePath,
    FictionId: FictionId,
    NextChapterId: null,
    DateCreation: date,
    NumberChapter: data.NumberChapter,
  }
  const precedentChapter = {
    NextChapterId: data.Id
  }
  const firstRequest = model.Chapter.create(newChapter)
  promises.push(firstRequest)
  return firstRequest
    .then((response) => {
      if (data.NumberChapter === 1) {
        return Promise.all(promises);
      } else {
        const secondRequest = model.Chapter.update(precedentChapter, { where: { Id: data.PrecedentChapterId } })
        promises.push(secondRequest)
        return secondRequest
          .then((response) => {
            return Promise.all(promises);
          })
      }
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}
const GetAllIllustrations = () => {
  return model.Illustration.findAll({})
}
const CountTotalWordBuUser = (usr) => {
  console.log("**** CountTotalWordsByUser ****", usr);
  return model.Chapter.findAll({
    attributes: [
      'FictionId',
      [model.Sequelize.fn('SUM', Sequelize.col('NbWords')), 'total_words']
    ],
    include: [{
      model: model.Fiction,
      attributes: [], // Ne sélectionne aucun attribut spécifique de Fiction ici si non nécessaire
      include: [{
        model: model.Game,
        attributes: [], // Idem pour Game
        include: [{
          model: model.UsersGame,
          attributes: [], // Idem pour UsersGame
          where: { UserId: usr }
        }]
      }]
    }],
    group: ['Chapter.FictionId'], // Assure-toi que le groupement est correct
    raw: true
  });
}
const CountTotalWordByUserV2 = (usr) => {
  console.log("**** CountTotalWordsByUserV2 ****", usr);
  return model.UsersGame.findAll({
    where: { UserId: usr },
    attributes: ['GameId'],
    include: [{
      model: model.Game,
      attributes: ['Id'],
      include: [{
        model: model.Fiction,
        attributes: ['Id'],
        include: [{
          model: model.Chapter,
          attributes: ['NbWords'],
          group: ['Chapter.FictionId'],
          raw: true
        }]
      }]
    }]
  });
};
const CreateComment = (usr, data) => {
  console.log("**** CountTotalWordsByUserV2 ****", usr, data);
  const request = model.Comment.create({
    Id: uuidv4(),
    FictionId: data.FictionId,
    ChaopterId: data.ChaopterId,
    Content: data.Content,
    UserId: usr,
    DateCreation: new Date()
  })
  const promises = []
  promises.push(request)
  return request
    .then((w) => {
      return Promise.all(promises)
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
}
const queries = {
  GetAllUsers,
  GetUserByLogin,
  GetUserByEmail,
  UpdateLastDateConnection,
  GetUserById,
  GetUserByUsername,
  GetAllCharacters,
  GetAllCharactersByUser,
  GetAllNamesAndIdsCharacters,
  GetCharacterByName,
  GetCharacterByNameSearch,
  GetAllCharactersByNameGradeAndClan,
  CreateANewCharacter,
  GetAllClans,
  GetClanById,
  GetClanByNameClan,
  GetAllLocations,
  countAllCharacters,
  countAllGames,
  countAllMyGames,
  GetAllImages,
  UploadUserAvatar,
  GetAllImagesTable,
  GetAllGrades,
  GetAllGames,
  GetAllGamesByUser,
  GetAllFictionsByName,
  GetAChapterByName,
  GetLastChapterOfAFiction,
  CreateANewGame,
  CreateANewChapter,
  GetFiveLastGameByUser,
  GetAllIllustrations,
  CountTotalWordBuUser,
  CountTotalWordByUserV2,
  GetAllCharactersDashboard,
  GetAllLastFiveGames,
  CreateComment,
  AddANewCharacterToGameAndFiction,
  GetFiveLastChapByUser
};

module.exports = queries;