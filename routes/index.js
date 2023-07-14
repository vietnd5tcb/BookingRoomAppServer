const roomRouter = require('./rooms')
const userRouter = require('./users')
const bookingRouter = require('./bookings')

function route(app) {

    app.use('/api/rooms', roomRouter)
    app.use('/api/users', userRouter)
    app.use('/api/bookings', bookingRouter)
}


module.exports = route;
