const mongoose = require('mongoose');
const Game = require('../models/game')


function getOneGame(id) {
    return new Promise((resolve, reject) => {
      mongoose.model('Game').findOne({ _id: id })
        .exec(function (err, game) {
          if (err) {
            res.json({
              error: 1,
              message: "Can't get by id",
            });
          } else {
            resolve(game);
          }
        });
    })
  }

function getAllGames() {
    return new Promise((resolve, reject) => {
      mongoose.model('Game').find({})
        .exec(function (err, games) {
          if (err) {
            reject(err);
          } else {
            resolve(games);
          };
        });
    });
  }


  function createGame(data) {
    return new Promise((resolve, reject) => {
      mongoose.model('Game').create(data, function (err, game) {
        if (err) {
          console.log(err);
          reject("Can't add game in DataBase");
        }
        else {
          resolve(game)
        }
      });
  
    });
  }

module.exports = {

    GetOneGame: async(id) => {
        let oneGame = await getOneGame(id)
        return oneGame
    },

    GetAllGames: async() => {
        let allGames = await getAllGames()
        return allGames
    },

    AddGame: async(data) => {
        let addedGame = await createGame(data)
        return addedGame
    }
  }