const mongoose = require('mongoose')
var TypeMunch = require("../../schemes/typeMunchkinScheme")

module.exports.saveTypeMunchkin = function(typeM, typeMunchkinRus, tags){
    
    const newTypeM = new TypeMunch({
        typeMunchkin : typeM,
        typeMunchkinRus : typeMunchkinRus,
        tags : tags
    })

    newTypeM.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getTypesMunchkin = function(callback){
    TypeMunch.find({}, function(error, types){
        callback(types)
    })
}

module.exports.findMunchkin = function(title, callback){
    TypeMunch.find({typeMunchkinRus : { $regex: title }}, 'typeMunchkin', function(error, types){
        callback(types)
    })
}