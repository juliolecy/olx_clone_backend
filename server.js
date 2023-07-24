require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileupload = require('express-fileupload')
const connectDatabase = require('./src/database/db')

const apiRoutes = require('./src/routes')

connectDatabase()

mongoose.Promise = global.Promise
mongoose.connection.on('error', (error)=>{
    console.log(error.message)
})

const server = express()

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(fileupload())

server.use(express.static(__dirname+'/public'));

server.use('/', apiRoutes)
server.listen(process.env.PORT, ()=>{
    console.log('Rodando na porta 5000')
})