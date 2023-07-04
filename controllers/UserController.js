// const users = [
//     {
//         id: 1,
//         username: 'Tran Nguyet Anh',
//         useremail: 'tna@mail.com',
//         password: 'password',
//         mssv: '20202024'
//     },
//     {
//         id: 2,
//         username: 'Nguyen Dac Viet',
//         useremail: 'vietnd@mail.com',
//         password: 'password1',
//         mssv: '20165694'
//     }
// ]

const User = require('../models/UserModel')

class UserController {

    // [GET] /api/user/get/:email 
    // getUserByEmail(req, res) {
    //     const user = users.find(users => users.useremail == req.params.useremail)
    //     if (!user) {
    //         res.status(404).send('User khong ton tai ')
    //     }
    //     res.send(user)
    // }

    // getId(req, res) {
    //     Room.findById(req.params.id)
    //         .then(room => res.json(room))
    //         .catch(err => res.status(404).json({ error: 'Room not found' }))

    // }

    getUserByEmail(req, res) {
        // User.find({ useremail: req.params.useremail.toString() })
        // const query = User.where({ this.getUserByEmail})
        const inputStr = req.params.useremail.toString()
        // User.findOne({ "useremail": req.params.useremail })
        // ? User.findOne({ "useremail": 'tna@gmail.com' })
        User.find({ "useremail": { $req.params.useremail } })
            // User.find({ useremail: 'tna@gmail.com' })
            .then(user => {
                if (user) {
                    res.json(user)
                } else {
                    res.json({ error: 'User ${inputStr} not found ' + inputStr })
                }
            })
            .catch(err => res.status(404).json({ error: 'Backend error' }))
    }


    list(req, res) {
        // res.send(users)

        res.json({
            name: 'test'
        })
    }

}

module.exports = new UserController;