const mongoose = require('mongoose')

var Schema = mongoose.Schema

var typeMunchkinScheme = new Schema({
    typeMunchkin : String,
    typeMunchkinRus : String,
    tags : String
})

module.exports = mongoose.model('typeMunchkinScheme', typeMunchkinScheme)