const express = require('express')
const cors = require('cors')
const bookingRoute = require('./routes/bookingRoute')
const handleError = require('./middlewares/error')
const notFoundHandler = require('./middlewares/not-found')


const app = express()

app.use(cors())
app.use(express.json())

app.use('/', bookingRoute)

app.use('*', notFoundHandler)
app.use(handleError)

module.exports = app