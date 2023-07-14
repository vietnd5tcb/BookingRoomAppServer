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
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        const userEmailValue = req.params.useremail
        User.find({})
            .then(listUser => {
                const checkUser = listUser.find(index => index.useremail == userEmailValue)
                if (checkUser) {
                    res.json({
                        success: "true",
                        user: checkUser
                    })
                    return
                } else {
                    res.json({
                        success: "false",
                        error: 'User not found'
                    })
                }
            })
            .catch(err => res.status(500).json({ error: 'Backend Error' }))
    }



    createUser(req, res) {

        // please follow below user model        
        // username: String,
        // useremail: String,
        // password: String,
        // mssv: Number,
        res.setHeader('Content-Type', 'application/json');
        res.append('Access-Control-Allow-Origin', ['*'])
        res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT')
        res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization')

        const user = new User(req.body)

        if (!user.username || !user.useremail || !user.password) {
            return res.status(200).json({
                success: "false",
                notice: "Khong nhap du thong tin bat buoc"
            })
        }

        User.find({})
            .then(listUser => {
                const checkUser = listUser.find(index => index.useremail == user.useremail)
                if (checkUser) {
                    return res.status(200).json({
                        success: "false",
                        notice: "Email da ton tai"
                    })
                } else {
                    user.save()
                        .then(() => {
                            res.json({
                                success: "true",
                                notice: "Add thanh cong",
                            })
                        })
                }
            })
            .catch(error => {
                res.status(500).json({ error: 'Backend Error' })
            })
    }

}

module.exports = new UserController;