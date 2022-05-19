const mongoose = require('mongoose')
var typeMunchkin = require("../..schemes/typeMunchkinScheme")

module.exports.saveTypeMunchkin = function(typeMunchkin){
    
    const type = new typeMunchkin({
        typeMunchkin : typeMunchkin
    })

    card.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getTypesMunchkin = function(callback){
    CardModel.find({}, 'type', function(error, types){
        callback(types)
    })
}
