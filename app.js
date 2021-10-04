const express = require('express');
const path = require('path');
const gameController = require('./controllers/gameController')



////////////////////////////////////////////////////////////////////////////// DB CONNECTION //////////////////////////////////////////////////////////////
const mongoose = require('mongoose');
const Connect = async () => {
    let url = "mongodb://127.0.0.1/NodeJSGame";
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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;


////////////////////////////////////////////////////////////////////////////// APP ROUTES //////////////////////////////////////////////////////////////


app.get('/GetAllGames', async function (req, res, next) {
    let allGames = await gameController.GetAllGames()
        .then((result) => {
            return (result);
        })
        .catch((error) => {
            return (error)
        })

    res.json(allGames)
})

app.get('/GetOneGame/:id', async function (req, res, next) {
    let oneGame = await gameController.GetOneGame(req.params.id)
        .then((result) => {
            return (result);
        })
        .catch((error) => {
            return (error)
        })
    res.json(oneGame)
})

app.post('/addGame', async function (req, res, next) {
    let addedGame = await gameController.AddGame(req.body)
        .then((result) => {
            return (result);
        })
        .catch((error) => {
            return (error)
        })
    res.json(addedGame)
})

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

