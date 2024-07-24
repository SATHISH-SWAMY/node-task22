let bookings = [];
let bookingId = 1;

const createBooking = (customerName, date, startTime, endTime, roomId) => {
  const booking = { id: bookingId++, customerName, date, startTime, endTime, roomId, status: 'confirmed' };
  bookings.push(booking);
  return booking;
};

const getBookings = () => bookings;

const getBookingsByCustomer = (customerName) => bookings.filter(booking => booking.customerName === customerName);

const getBookingByRoomAndTime = (roomId, date, startTime, endTime) => 
  bookings.find(booking => 
    booking.roomId === roomId &&
    booking.date === date &&
    (
      (startTime >= booking.startTime && startTime < booking.endTime) ||
      (endTime > booking.startTime && endTime <= booking.endTime)
    )
  );

module.exports = { createBooking, getBookings, getBookingsByCustomer, getBookingByRoomAndTime };
