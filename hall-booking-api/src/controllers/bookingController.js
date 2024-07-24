const { createBooking, getBookings, getBookingsByCustomer, getBookingByRoomAndTime } = require('../models/bookingModel');
const { getRoomById } = require('../models/roomModel');

const bookRoom = (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  const room = getRoomById(roomId);
  if (!room) {
    return res.status(404).json({ error: 'Room not found' });
  }
  const existingBooking = getBookingByRoomAndTime(roomId, date, startTime, endTime);
  if (existingBooking) {
    return res.status(400).json({ error: 'Room is already booked for this time' });
  }
  const booking = createBooking(customerName, date, startTime, endTime, roomId);
  res.status(201).json(booking);
};

const listAllRoomsWithBooking = (req, res) => {
  const rooms = getRooms();
  const bookings = getBookings();
  const result = rooms.map(room => {
    const roomBookings = bookings.filter(booking => booking.roomId === room.id);
    return {
      ...room,
      bookedStatus: roomBookings.length > 0,
      bookings: roomBookings
    };
  });
  res.status(200).json(result);
};

const listCustomersWithBookings = (req, res) => {
  const bookings = getBookings();
  const result = bookings.map(booking => ({
    customerName: booking.customerName,
    roomName: getRoomById(booking.roomId).name,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime
  }));
  res.status(200).json(result);
};

const listCustomerBookingStats = (req, res) => {
  const { customerName } = req.params;
  const bookings = getBookingsByCustomer(customerName);
  const result = bookings.map(booking => ({
    customerName: booking.customerName,
    roomName: getRoomById(booking.roomId).name,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
    bookingId: booking.id,
    bookingDate: new Date(),
    bookingStatus: booking.status
  }));
  res.status(200).json(result);
};

module.exports = { bookRoom, listAllRoomsWithBooking, listCustomersWithBookings, listCustomerBookingStats };
