const express = require('express')
var cors = require('cors')
const app = express()

//Lägga till vilken port
app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)
app.use(express.json())

// kan också vara /api/router i tom string
app.use('', require('./routes/gomoku_routes.js'))

module.exports = app
