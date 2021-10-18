const mongoose = require('mongoose');
const Driver = require('../models/driver')


function getOneDriver(id) {
    return new Promise((resolve, reject) => {
      mongoose.model('Driver').findOne({ _id: id })
        .exec(function (err, driver) {
          if (err) {
            res.json({
              error: 1,
              message: "Can't get by id",
            });
          } else {
            resolve(driver);
          }
        });
    })
  }

function getAllDrivers() {
    return new Promise((resolve, reject) => {
      mongoose.model('Driver').find({})
        .exec(function (err, drivers) {
          if (err) {
            reject(err);
          } else {
            resolve(drivers);
          };
        });
    });
  }


  function createDriver(data) {
    return new Promise((resolve, reject) => {
      mongoose.model('Driver').create(data, function (err, driver) {
        if (err) {
          console.log(err);
          reject("Can't add driver in DataBase");
        }
        else {
          resolve(driver)
        }
      });
  
    });
  }

  function updateDriver(id, data) {
    return new Promise((resolve, reject) => {
      mongoose.model('Driver').findOneAndUpdate({ _id: id }, data, { returnOriginal: false }, function (err, driver) {
        if (err) {
          console.log(err);
          reject("Can't update driver");
        } else {
          resolve("Driver update OK");
        }
      });
    })
  }

  function deleteDriver(id) {
    return new Promise((resolve, reject) => {
      mongoose.model('Driver').findOneAndDelete({ _id: id }, function (err, driver) {
        if (err) {
          console.log(err);
          reject("Can't delete driver");
        } else {
          resolve("Driver delete OK");
        }
      });
    })
  }

module.exports = {

    GetOneDriver: async(id) => {
        let oneDriver = await getOneDriver(id)
        return oneDriver
    },

    GetAllDrivers: async() => {
        let allDrivers = await getAllDrivers()
        return allDrivers
    },

    AddDriver: async(data) => {
        let addedDriver = await createDriver(data)
        return addedDriver
    },

    UpdateDriver: async(data) => {
      let updatedDriver = await updateDriver(data) 
      return updatedDriver
    },

    DeleteDriver: async(id) => {
      let deletedDriver = await deleteDriver(id)
      return deletedDriver
    }
  }