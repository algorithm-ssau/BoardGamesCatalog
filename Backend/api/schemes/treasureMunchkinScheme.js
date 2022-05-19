const mongoose = require('mongoose')

var Schema = mongoose.Schema

var treasureMunchkinScheme = new Schema({
    bonus : String,
    cardName : String,
    target : String,
    equipment : String,
    description : String,
    cost : Number
})

module.exports = mongoose.model('treasureMunchkinScheme', treasureMunchkinScheme)