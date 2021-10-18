const mongoose = require('mongoose');
const Car = require('../models/car')


function getOneCar(id) {
    return new Promise((resolve, reject) => {
      mongoose.model('Car').findOne({ _id: id })
        .exec(function (err, car) {
          if (err) {
            res.json({
              error: 1,
              message: "Can't get by id",
            });
          } else {
            resolve(car);
          }
        });
    })
  }

function getAllCars() {
    return new Promise((resolve, reject) => {
      mongoose.model('Car').find({})
        .exec(function (err, cars) {
          if (err) {
            reject(err);
          } else {
            resolve(cars);
          };
        });
    });
  }


  function createCar(data) {
    return new Promise((resolve, reject) => {
      mongoose.model('Car').create(data, function (err, car) {
        if (err) {
          console.log(err);
          reject("Can't add car in DataBase");
        }
        else {
          resolve(car)
        }
      });
  
    });
  }

  function updateCar(id, data) {
    return new Promise((resolve, reject) => {
      mongoose.model('Car').findOneAndUpdate({ _id: id }, data, { returnOriginal: false }, function (err, car) {
        if (err) {
          console.log(err);
          reject("Can't update car");
        } else {
          resolve(car);
        }
      });
    })
  }

  function deleteCar(id) {
    return new Promise((resolve, reject) => {
      mongoose.model('Car').findOneAndDelete({ _id: id }, function (err, car) {
        if (err) {
          console.log(err);
          reject("Can't delete car");
        } else {
          resolve("Car delete OK");
        }
      });
    })
  }

module.exports = {

    GetOneCar: async(id) => {
        let oneCar = await getOneCar(id)
        return oneCar
    },

    GetAllCars: async() => {
        let allCars = await getAllCars()
        return allCars
    },

    AddCar: async(data) => {
        let addedCar = await createCar(data)
        return addedCar
    },

    UpdateCar: async(data) => {
      let updatedCar = await updateCar(data) 
      return updatedCar
    },

    DeleteCar: async(id) => {
      let deletedCar = await deleteCar(id)
      return deletedCar
    }
  }