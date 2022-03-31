const express = require('express')
const db = require('../database/dbcards')
const jsonParser = express.json()

var cardRouter = express.Router()

cardRouter.get("/", function(req, res){
    db.getCardCategories(function(categories){
        res.json(categories)
    })
})

cardRouter.get("/:category", function(req, res){
    const category = req.params.category
    db.getCards(category, function(cards){
        res.json(cards)
    })
})

cardRouter.post("/", jsonParser, function(req, res){
    if (!req.body) res.sendStatus(400)
    
    const typeMunchkin = req.body.typeMunchkin
    const cardName = req.body.cardName
    const cardDescription = req.body.cardDescription

    db.saveCard(typeMunchkin, cardName, cardDescription)
    res.sendStatus(201)
})

module.exports = cardRouter