const mongoose = require('mongoose')
var CardModel = require('../../schemes/munchkinCardScheme')

module.exports.saveCard = function(typeMunchkin, cardNameEng, cardNameRus, cardDescription, cardType){
    
    const card = new CardModel({
        typeMunchkin : typeMunchkin,
        cardNameEng : cardNameEng,
        cardNameRus : cardNameRus,
        cardDescription : cardDescription,
        cardType : cardType
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

module.exports.getCards = function(type,search, callback){
    console.log(type)
    console.log(search)
    CardModel.find({typeMunchkin : type, 
        cardNameRus : {$regex: search}}, function(error, cards){
        callback(cards)
    })
}