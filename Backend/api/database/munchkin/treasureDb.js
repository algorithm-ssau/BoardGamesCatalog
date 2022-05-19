const mongoose = require('mongoose')
var CardModel = require("../..schemes/treasureMunchkinScheme")

module.exports.saveTypeMunchkin = function(bonus, cardName, target, equipment, description, cost ){
    
    const card = new CardModel({
        bonus : bonus,
        cardName : cardName,
        target : target,
        equipment : equipment,
        description : description,
        cost : cost
    })

    card.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getTreasures = function(callback){
    CardModel.find({}, 'treasure', function(error, treasure){
        callback(treasure)
    })
}