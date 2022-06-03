const express = require('express')
const db = require('../database/munchkin/munchkinCardDb')
const jsonParser = express.json()

var cardRouter = express.Router()

cardRouter.get("/", function(req, res){
    db.getCardTypes(function(categories){
        res.json(categories)
    })
})

cardRouter.get("/:typeMuchkin", function(req, res){
    const typeMuchkin = req.params.typeMuchkin
    const searchText = req.query.search
    db.getCards(typeMuchkin,searchText, function(cards){
        res.json(cards)
    })
})

cardRouter.post("/", jsonParser, function(req, res){
    if (!req.body) res.sendStatus(400)
    
    const typeMunchkin = req.body.typeMunchkin
    const cardNameEng = req.body.cardNameEng
    const cardNameRus = req.body.cardNameRus
    const cardDescription = req.body.cardDescription
    const cardType = req.body.cardType

    db.saveCard(typeMunchkin, cardNameEng, cardNameRus, cardDescription, cardType)
    res.sendStatus(201)
})


module.exports = cardRouter