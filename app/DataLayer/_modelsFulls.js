/**
 * Model Imbriqués
 *
 */

const model = require("../Models/index");
/**
 * DATAS MODELS
 *
 */

const CharacterInfo = [
  { model: model.Grade },
  {
    model: model.Warrior,
    include: [
      {
        model: model.Clan,
      },
    ],
  },
];

const modelsFulls = {
  CharacterInfo,
};
module.exports = modelsFulls;
