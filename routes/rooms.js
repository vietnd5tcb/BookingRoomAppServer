const express = require('express')
const router = express.Router()

const roomController = require('../controllers/RoomController')

// roomController.index
router.get('/get/:id', roomController.getId)

router.get('/list', roomController.list)

module.exports = router;
