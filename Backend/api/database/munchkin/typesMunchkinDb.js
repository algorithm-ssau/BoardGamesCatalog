const mongoose = require('mongoose')
var TypeMunch = require("../../schemes/typeMunchkinScheme")

module.exports.saveTypeMunchkin = function(typeM){
    
    const newTypeM = new TypeMunch({
        typeMunchkin : typeM
    })

    newTypeM.save().then(function(doc){
        console.log("Сохранен объект", doc)
    })
}

module.exports.getTypesMunchkin = function(callback){
    TypeMunch.find({}, 'type', function(error, types){
        callback(types)
    })
}
