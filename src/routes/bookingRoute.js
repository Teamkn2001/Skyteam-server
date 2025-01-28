const express = require('express')
const bookingController = require('../controllers/bookingController')
const { validateUserForm } = require('../middlewares/validator')

const bookingRoute = express.Router()

bookingRoute.post('/', validateUserForm,  bookingController.getBookings)

module.exports = bookingRoute