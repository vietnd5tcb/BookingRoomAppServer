const { Types } = require('mongoose')
const Booking = require('../models/BookingModel')

class BookingController {

    // [GET] /api/bookings/get/:id
    getId(req, res) {
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        Booking.findById(req.params.id)
            .then(booking => {
                if (booking) {
                    return res.json(
                        {
                            success: "true",
                            data: booking
                        })
                } else {
                    return res.json(
                        {
                            success: "false",
                            notice: "booking not found"
                        })
                }
            })
            .catch(err => res.status(200).json({ success: "false", error: 'Booking not found' }))

    }


    createBooking(req, res) {
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        res.setHeader('Content-Type', 'application/json');

        const booking = new Booking(req.body)

        if (!booking.createBy || !booking.createBy || !booking.room) {
            return res.status(200).json({
                success: "false",
                notice: "Khong nhap du thong tin bat buoc"
            })
        }

        if (!booking.startTime || !booking.endTime) {
            return res.status(200).json({
                success: "false",
                notice: "Khong nhap du thong tin thoi gian",
                data: booking
            })
        }

        if (booking.startTime > booking.endTime) {
            return res.status(200).json({
                success: "false",
                notice: "Thoi gian khong hop le",
                data: booking
            })

        }


        const currentBookingRoom = new Types.ObjectId(booking.room)

        Booking.find({ room: currentBookingRoom })
            .then(listBookingOfRoom => {
                if (listBookingOfRoom[0]) {
                    for (var i = 0; i < listBookingOfRoom.length; i++) {
                        if (booking.startTime >= listBookingOfRoom[i].startTime
                            &&
                            booking.startTime <= listBookingOfRoom[i].endTime
                        ) {
                            console.log("Phong da co nguoi dat")
                            return res.status(200).json({
                                success: "false",
                                notice: "Phong da co nguoi dat"
                            })
                        }
                        if (booking.endTime >= listBookingOfRoom[i].startTime
                            &&
                            booking.endTime <= listBookingOfRoom[i].endTime
                        ) {
                            return res.status(200).json({
                                success: "false",
                                notice: "Phong da co nguoi dat"
                            })
                        }
                    }
                    return booking.save().then(() => {
                        res.status(200).json({
                            success: "true",
                            notice: "Booking thanh cong"
                        })
                    })

                }
            })
            .catch(err => res.status(500).json("Backend error"))

    }

    // [GET] /api/bookings/list 
    list(req, res) {
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        Booking.find({})
            .then(bookings => {
                res.json({
                    success: "true",
                    data: bookings
                })
            })
            .catch(err => res.status(200).json({
                success: "false",
                notice: 'Not have any booking'
            }))
    }

}

module.exports = new BookingController;
