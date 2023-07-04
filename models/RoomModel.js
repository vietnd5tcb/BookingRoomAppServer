const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Room = new Schema({
    id: ObjectId,
    name: String,
});


module.exports = mongoose.model('Room', Room);
