const roomRouter = require('./rooms')
const userRouter = require('./users')

function route(app) {

    app.use('/api/rooms', roomRouter)
    app.use('/api/users', userRouter)
}


module.exports = route;
