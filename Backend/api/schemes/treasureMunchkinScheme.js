const mongoose = require('mongoose')

var Schema = mongoose.Schema

var treasureMunchkinScheme = new Schema({
    bonus : String,
    cardName : String,
    target : String,
    equipment : String,
    cost : String
})

module.exports = mongoose.model('treasureMunchkinScheme', treasureMunchkinScheme)