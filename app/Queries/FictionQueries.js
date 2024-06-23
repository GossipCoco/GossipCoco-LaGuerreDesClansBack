const { v4: uuidv4 } = require('uuid');
const model = require('../Models');
require('../Models/associations');

const GetAllFictionsByName = (name, nav) => {
    console.log("**** GetAllFictionsByName ****", name, nav);
    console.log(name, nav)
    return model.Fiction.findOne({
      where: {
        Id: { [model.Utils.Op.like]: `%${name}%` },
      },
      include: [
        {
            model: model.User,
            attributes: ['Id', 'UserName']
          },
        { model: model.FictionIllustration },
        { model: model.Chapter },
        { model: model.User, attributes: ['Id', 'UserName'] },
        {
          model: model.Game,
          include: [            
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
    return model.Game.findAll({
      include: [{        
          model: model.Fiction,
          where: { UserId: usr },
          attributes: ['Id'],
          include: [{
            model: model.Chapter,
            attributes: ['NbWords'],
            group: ['Chapter.FictionId'],
            raw: true
        }]
      }]
    });
  };
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
  const GetFiveLastChapByUser = (usr) => {
    console.log("**** GetFiveLastChapByUser ****", usr);
    console.log(new Date(new Date() - 24 * 60 * 60 * 20000))
    return model.Chapter.findAll({
      limit: 2,
      attributes: ['Id', 'Title', 'DateCreation', 'Image'],
      order: [['DateCreation', 'DESC']],
      include: [{
        model: model.Fiction,
        attributes: ['Id', 'Title', 'Image'],
        where: { UserId: { [model.Utils.Op.like]: `%${usr}%` } }
      }]
    })
  }
  const queries = {    
    CountTotalWordBuUser,
    CountTotalWordByUserV2,
    GetAllFictionsByName,
    GetAChapterByName,
    GetLastChapterOfAFiction,
    GetFiveLastChapByUser,
    CreateANewChapter
  };

  module.exports = queries;