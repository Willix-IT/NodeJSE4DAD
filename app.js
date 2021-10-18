const express = require('express');
const path = require('path');
const carController = require('./controllers/carController')
const driverController = require('./controllers/driverController')
const cors = require('cors');



////////////////////////////////////////////////////////////////////////////// DB CONNECTION //////////////////////////////////////////////////////////////
const mongoose = require('mongoose');
const Connect = async () => {
    let url = "mongodb+srv://admin:P%40ssword1234@cluster0.zsclg.mongodb.net/NodeJSCar?retryWrites=true&w=majority";
    try {
        let client = await mongoose.connect(url);
        console.log("Database is connected!");
    } catch (error) {
        console.log(error.stack);
        process.exit(1);
    }
}
Connect();



////////////////////////////////////////////////////////////////////////////// APP SETUP //////////////////////////////////////////////////////////////


const app = express();
app.use(cors({
    origin: "*"
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;


////////////////////////////////////////////////////////////////////////////// APP ROUTES CARS //////////////////////////////////////////////////////////////


app.get('/cars', async function (req, res, next) {
    let allCars = await carController.GetAllCars()
        .then((result) => {
            return (result);
        })
        .catch((error) => {
            return (error)
        })

    res.json(allCars)
})

app.get('/car/:id', async function (req, res, next) {
    let oneCar = await carController.GetOneCar(req.params.id)
        .then((result) => {
            return (result);
        })
        .catch((error) => {
            return (error)
        })
    res.json(oneCar)
})

app.post('/car', async function (req, res, next) {
    let addedCar = await carController.AddCar(req.body)
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error
        })
    res.json(addedCar)
})

app.put('/car/:id', async function (req, res, next) {
    let updatedCar = await carController.UpdateCar(req.params.id, req.body)
    .then((result) => {
        res.status(200).send("Update OK")
    })
    .catch((error) => {
        res.status(400).send(error)
    })
  })

  app.delete('/car/:id', async function (req, res, next) {
    let deletedCar = await carController.DeleteCar(req.params.id)
    .then((result) => {
        res.status(200).send("Deletion OK")
    })
    .catch((error) => {
        res.status(400).send(error)
    })
  })


  ////////////////////////////////////////////////////////////////////////////// APP ROUTES DRIVERS //////////////////////////////////////////////////////////////

  app.get('/drivers', async function (req, res, next) {
    let allDrivers = await driverController.GetAllDrivers()
        .then((result) => {
            return (result);
        })
        .catch((error) => {
            return (error)
        })

    res.json(allDrivers)
})

app.get('/driver/:id', async function (req, res, next) {
    let oneDriver = await driverController.GetOneDriver(req.params.id)
        .then((result) => {
            return (result);
        })
        .catch((error) => {
            return (error)
        })
    res.json(oneDriver)
})

app.post('/driver', async function (req, res, next) {
    let addedDriver = await driverController.AddDriver(req.body)
        .then((result) => {
            return result;
        })
        .catch((error) => {
            return error
        })
    res.json(addedDriver)
})

app.put('/driver/:id', async function (req, res, next) {
    let updatedDriver = await driverController.UpdateDriver(req.params.id, req.body)
    .then((result) => {
        res.status(200).send("Update OK")
    })
    .catch((error) => {
        res.status(400).send(error)
    })
  })

  app.delete('/driver/:id', async function (req, res, next) {
    let deletedDriver = await driverController.DeleteDriver(req.params.id)
    .then((result) => {
        res.status(200).send("Deletion OK")
    })
    .catch((error) => {
        res.status(400).send(error)
    })
  })

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

