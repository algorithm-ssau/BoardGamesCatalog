const mongoose = require('mongoose')

var Schema = mongoose.Schema

var typeMunchkinScheme = new Schema({
    typeMunchkin : String,
    cardName : String,
    cardDescription : String
})

module.exports = mongoose.model('typeMunchkinScheme', typeMunchkinScheme)