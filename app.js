// var http = require('http');

// const port = '3000'

// const rooms = [
//     {
//         id: 1,
//         name: '924'
//     },
//     {
//         id: 2,
//         name: '303'
//     }
// ]

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// http.createServer(function (request, response) {

//     response.setHeader('Content-Type', 'application/json');
//     response.setHeader('X-Powered-By', 'Node.js')

//     response.statusCode = 404;

//     response.writeHead(404, {
//         'Content-Type': 'application/json',
//         'X-Powered-By': 'Node.js'
//     })

//     response.end(JSON.stringify({
//         success: false,
//         error: 'NOT FOUND',
//         data: null
//     }));
// }).listen(port);

// console.log('Server running at http://127.0.0.1:${port}/');



const bodyParser = require('body-parser');
const express = require('express');
const { get } = require('http');

const route = require('./routes')

const app = express()
const port = process.env.port || 3000;
const database = require('./config/database')

database.connect()

const rooms = [
    {
        id: 1,
        name: '924'
    },
    {
        id: 2,
        name: '303'
    }
]

app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/api/rooms/list', (req, res) => res.send(rooms))

// Routes init
app.use(bodyParser.json())
route(app);


// /api/rooms/add




app.post('/api/rooms/add', (req, res) => {
    console.log(req.body)
    res.setHeader('X-Powered-By', 'Node.js')

    const room = {
        id: req.body.id,
        name: req.body.name
    }
    rooms.push(room)

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        success: "true",
        notice: "Add thanh cong",
        data: rooms
    }))
})

//  

app.put('/api/rooms/update/:id', (req, res) => {
    const room = rooms.find(rooms => rooms.id === parseInt(req.params.id))
    if (!room) {
        res.status(404).send("Id khong ton tai")
    }
    room.name = req.body.name
    // room.name = "2";


    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        success: "true",
        notice: "Add thanh cong",
        data: rooms
    }))
})


app.delete('/api/rooms/delete/:id', (req, res) => {
    const room = rooms.find(rooms => rooms.id === parseInt(req.params.id))
    if (!room) {
        res.status(404).send('Rooms khong ton tai ')
    }
    if (room) {
        let index = rooms.indexOf(room)
        rooms.splice(index, 1)
    }

    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({
        success: "true",
        notice: "Delete thanh cong",
        data: rooms
    }))

})

app.listen(port, () => console.log(`App listening on port ${port}!`))

// app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// })