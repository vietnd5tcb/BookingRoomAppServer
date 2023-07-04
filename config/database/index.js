const mongoose = require('mongoose')



async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/booking', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect to DB booking successfully');
    } catch (error) {
        console.log('Connect to DB booking fail');
        console.log(error)
    }

}


module.exports = { connect }  