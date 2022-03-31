const mongoose = require('mongoose')
var CardModel = require("../schemes/CardSchema")

module.exports.saveCard = function(typeMunchkin, cardName, cardDescription){
    
    const card = new CardModel({
        typeMunchkin : typeMunchkin,
        cardName : cardName,
        cardDescription : cardDescription
    })

    card.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getCardTypes = function(callback){
    CardModel.find({}, 'type', function(error, types){
        callback(types)
    })
}

module.exports.getCards = function(type, callback){
    CardModel.find({"type" : type}, function(error, cards){
        callback(cards)
    })
}