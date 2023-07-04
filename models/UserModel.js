const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    id: ObjectId,
    username: String,
    useremail: String,
    password: String,
    mssv: Number,
    createAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', User);
