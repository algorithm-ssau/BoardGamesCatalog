const express = require('express')
const db = require('../database/treasureDb')
const jsonParser = express.json()

var treasureRouter = express.Router()

treasureRouter.get("/", function(req, res){
    db.getTreasures(function(treasures){
        res.json(treasures)
    })
})

treasureRouter.post("/", jsonParser, function(req, res){
    if (!req.body) res.sendStatus(400)
    const treasure = req.body.treasure
    db.saveCard(treasure)
    res.sendStatus(201)
})

module.exports = treasureRouter