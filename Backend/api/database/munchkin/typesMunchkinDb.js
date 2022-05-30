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
<<<<<<< HEAD
    TypeMunch.find({}, 'typeMunckin', function(error, types){
=======
    TypeMunch.find({}, 'typeMunchkin', function(error, types){
>>>>>>> 59c98e069aed94a979c4aa3a2d82682ff9de40a1
        callback(types)
    })
}