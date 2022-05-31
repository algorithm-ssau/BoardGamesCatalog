const mongoose = require('mongoose')

var Schema = mongoose.Schema

var munchkinCardScheme = new Schema({
    typeMunchkin : String,
    cardNameEng : String,
    cardNameRus : String,
    cardDescription : String,
    cardType : String
})

module.exports = mongoose.model('munchkinCardScheme', munchkinCardScheme)