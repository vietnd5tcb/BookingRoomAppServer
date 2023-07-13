const express = require('express')
const router = express.Router()

const userController = require('../controllers/UserController')

// roomController.index
router.get('/get/:useremail', userController.getUserByEmail)
router.post('/create/', userController.createUser)


module.exports = router;
