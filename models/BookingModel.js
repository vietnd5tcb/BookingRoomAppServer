const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Booking = new Schema({
    id: ObjectId,
    createBy: ObjectId,
    room: ObjectId,
    startTime: Date,
    endTime: Date
});


module.exports = mongoose.model('Booking', Booking);
