const express = require('express');
const { bookRoom, listAllRoomsWithBooking, listCustomersWithBookings, listCustomerBookingStats } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', bookRoom);
router.get('/rooms', listAllRoomsWithBooking);
router.get('/customers', listCustomersWithBookings);
router.get('/customers/:customerName', listCustomerBookingStats);

module.exports = router;
