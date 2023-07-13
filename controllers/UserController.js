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
    getUserByEmail(req, res) {
        const userEmailValue = req.params.useremail

        User.find({ useremail: userEmailValue }).exec()
            .then(user => {
                if (user != null) {
                    res.append('Access-Control-Allow-Origin', ['*'])
                    res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
                    res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')
                    res.json(user)
                } else {
                    res.json({ error: 'User ${inputStr} not found ' + inputStr })
                }
            })
            .catch(err => res.status(500).json({ error: 'Backend Error' }))
    }



    createUser(req, res) {

        res.setHeader('Content-Type', 'application/json');
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        const user = new User(req.body)

        user.save()
            .then(() => {
                res.json({
                    success: "true",
                    notice: "Add thanh cong",
                })
            })
            .catch(error => {
                res.status(500).json({ error: 'Backend Error' })
            })
    }


    // app.post('/api/rooms/add', (req, res) => {
    //     console.log(req.body)
    //     res.setHeader('X-Powered-By', 'Node.js')

    //     const room = {
    //         id: req.body.id,
    //         name: req.body.name
    //     }
    //     rooms.push(room)

    //     res.setHeader('Content-Type', 'application/json');
    //     res.send(JSON.stringify({
    //         success: "true",
    //         notice: "Add thanh cong",
    //         data: rooms
    //     }))
    // })

}

module.exports = new UserController;