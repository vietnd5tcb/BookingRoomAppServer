const Booking = require('../models/BookingModel')

class BookingController {

    // [GET] /api/bookings/get/:id
    getId(req, res) {
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        Booking.findById(req.params.id)
            .then(booking => {
                res.json(
                    {
                        success: "true",
                        data: booking
                    })
            })
            .catch(err => res.status(200).json({ success: "false", error: 'Booking not found' }))

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
            .catch(err => res.status(200).json({ error: 'Not have any booking' }))
    }

}

module.exports = new BookingController;
