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
    const typeMunchkinRus = req.body.typeMunchkinRus
    const tags = req.body.tags
    db.saveTypeMunchkin(typeMunchkin, typeMunchkinRus, tags)
    res.sendStatus(201)
})

typesMunchkinRouter.get("/:title", jsonParser, function(req, res){
    const title = req.params.title
    console.log(title)
    db.findMunchkin(title, function(types){
        res.json(types)
    })
})

module.exports = typesMunchkinRouter
