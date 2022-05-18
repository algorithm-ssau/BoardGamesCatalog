const express = require('express')
const db = require('../database/typeMunchkinDb')
const jsonParser = express.json()

var cardRouter = express.Router()

cardRouter.get("/", function(req, res){
    db.getCardCategories(function(types){
        res.json(types)
    })
})

cardRouter.post("/", jsonParser, function(req, res){
    if (!req.body) res.sendStatus(400)
    const typeMunchkin = req.body.typeMunchkin
    db.saveCard(typeMunchkin)
    res.sendStatus(201)
})

module.exports = cardRouter
