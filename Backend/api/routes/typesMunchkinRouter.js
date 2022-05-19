const express = require('express')
const db = require('../database/munchkin/typesMunchkinDb')
const jsonParser = express.json()

var typesMunchkinRouter = express.Router()

typesMunchkinRouter.get("/", function(req, res){
    db.getTypesMunchkin(function(types){
        res.json(types)
    })
})

typesMunchkinRouter.post("/", jsonParser, function(req, res){
    if (!req.body) res.sendStatus(400)
    const typeMunchkin = req.body.typeMunchkin
    db.saveCard(typeMunchkin)
    res.sendStatus(201)
})

module.exports = typesMunchkinRouter
