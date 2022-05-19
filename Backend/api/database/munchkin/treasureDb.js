const mongoose = require('mongoose')
var treasureModel = require("../../schemes/treasureMunchkinScheme")

module.exports.saveTypeMunchkin = function(bonus, cardName, target, equipment, description, cost ){
    
    const treasure = new treasureModel({
        bonus : bonus,
        cardName : cardName,
        target : target,
        equipment : equipment,
        description : description,
        cost : cost
    })

    treasure.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getTreasures = function(callback){
    treasureModel.find({}, 'treasure', function(error, treasure){
        callback(treasure)
    })
}