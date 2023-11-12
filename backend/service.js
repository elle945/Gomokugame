require('dotenv').config()
const pkg = require('pg')
const app = require('./server.js')
const { Client } = pkg
var path = require('path')
//Hämtar express
const express = require('express')

//Refererar till port
const PORT = process.env.PORT || 3000

//Säg till att det kommer i json fromat.

const client = new Client({
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    user: process.env.PGUSER
})

//Lyssnar på porten

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
