
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Book_name: String,
    Author: String,
    Summary: String,
    Price: Number
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel