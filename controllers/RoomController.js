const Room = require('../models/RoomModel')

class RoomController {

    // [GET] /api/rooms/get/:id
    getId(req, res) {
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        Room.findById(req.params.id)
            .then(room => {
                res.json(
                    {
                        success: "true",
                        data: room
                    })
            })
            .catch(err => res.status(200).json({ success: "false", error: 'Room not found' }))

    }

    // [GET] /api/rooms/list
    list(req, res) {
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        Room.find({})
            .then(rooms => {
                res.json({
                    success: "true",
                    data: rooms
                })
            })
            .catch(err => res.status(200).json({ error: 'Not have any room' }))
    }

}

module.exports = new RoomController;
