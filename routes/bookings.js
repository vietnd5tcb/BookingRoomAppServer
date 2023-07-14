const express = require('express')
const router = express.Router()

const bookingController = require('../controllers/BookingController')

// roomController.index
router.get('/get/:id', bookingController.getId)

router.get('/list', bookingController.list)

module.exports = router;
