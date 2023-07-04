const Room = require('../models/RoomModel')

class RoomController {

    // [GET] /api/rooms/get/:id
    getId(req, res) {
        Room.findById(req.params.id)
            .then(room => res.json(room))
            .catch(err => res.status(404).json({ error: 'Room not found' }))

    }

    // [GET] /api/rooms/list
    list(req, res) {
        Room.find({})
            .then(rooms => {
                res.append('Access-Control-Allow-Origin', ['*'])
                res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
                res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')
                res.json(rooms)
            })
            .catch(err => res.status(404).json({ error: 'Not have any room' }))
    }

}

module.exports = new RoomController;
