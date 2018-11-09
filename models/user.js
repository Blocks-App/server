const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const UserSchema = new Schema({
    name : String,
    email : String,
    password : String,
    salt : String,
    avatarUrl : String,
    songsId : [{ type: Schema.Types.ObjectId, ref: 'Song' }]
})

module.exports = Mongoose.model('user', UserSchema)