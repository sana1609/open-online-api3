// Set up express
const express = require('express')
const app = express()
const db = require('./api/db/connection')

// Body parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Use .env files in local setup
!process.env.NODE_ENV ? require('dotenv').config() : console.log('DEV:PROD')

//Add Headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Pass to next layer of middleware
    next();
});

// Import routes
const author = require('./api/routes/authors')
const book = require('./api/routes/book')
const bookinfo = require('./api/routes/bookinfo')
const borrow = require('./api/routes/borrow')
const branch = require('./api/routes/branch')
const copy = require('./api/routes/copy')
const location = require('./api/routes/location')
const publisher = require('./api/routes/publisher')
const reader = require('./api/routes/reader')
const reserve = require('./api/routes/reserve')

// Use routes
app.use('/author', author)
app.use('/book', book)
app.use('/bookinfo', bookinfo)
app.use('/borrow', borrow)
app.use('/branch', branch)
app.use('/copy', copy)
app.use('/location', location)
app.use('/publisher', publisher)
app.use('/reader', reader)
app.use('/reserve', reserve)

// Listen for the server at a port.
app.listen(process.env.PORT || 8000, (err) => {
    console.log('Server running on ' + 8000)
})
