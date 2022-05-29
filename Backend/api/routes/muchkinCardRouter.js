const express = require('express')
const db = require('../database/munchkin/munchkinCardDb')
const jsonParser = express.json()

var cardRouter = express.Router()

cardRouter.get("/", function(req, res){
    db.getCardCategories(function(categories){
        res.json(categories)
    })
})

cardRouter.get("/:typeMuchkin", function(req, res){
    const typeMuchkin = req.params.typeMuchkin
    db.getCards(typeMuchkin, function(cards){
        res.json(cards)
    })
})

cardRouter.post("/", jsonParser, function(req, res){
    if (!req.body) res.sendStatus(400)
    
    const typeMunchkin = req.body.typeMunchkin
    const typeCreature = req.body.typeCreature
    const cardLevel = req.body.cardLevel
    const cardName = req.body.cardName
    const cardDescription = req.body.cardDescription

    db.saveCard(typeMunchkin, typeCreature,cardLevel, cardName, cardDescription)
    res.sendStatus(201)
})

module.exports = cardRouter