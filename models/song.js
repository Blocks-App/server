const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const MusicSchema = new Schema({
    title : String,
    artist : String,
    genre : String,
    coverUrl : String,
    audioUrl : String
})

module.exports = Mongoose.model('music', MusicSchema)