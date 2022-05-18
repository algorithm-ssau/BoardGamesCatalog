const mongoose = require('mongoose')

var Schema = mongoose.Schema

var munchkinCardScheme = new Schema({
    typeMunchkin : String,
    cardName : String,
    cardDescription : String
})

module.exports = mongoose.model('munchkinCardScheme', munchkinCardScheme)