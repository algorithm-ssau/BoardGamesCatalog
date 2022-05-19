const mongoose = require('mongoose')
var CardModel = require("../schemes/munchkinCardScheme")

module.exports.saveCard = function(typeMunchkin,cardLevel, typeCreature, cardName, cardDescription){
    
    const card = new CardModel({
        typeMunchkin : typeMunchkin,
        typeCreature : typeCreature,
        cardLevel : cardLevel,
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