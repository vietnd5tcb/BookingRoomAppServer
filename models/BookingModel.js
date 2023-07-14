const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Booking = new Schema({
    id: ObjectId,
    createBy: ObjectId,
    room: ObjectId,
    startTime: Number,
    startMinute: Number,
    endTime: Number,
    endMinute: Number
});


module.exports = mongoose.model('Booking', Booking);
