const { createRoom, getRooms, getRoomById } = require('../models/roomModel');

const addRoom = (req, res) => {
  const { numberOfSeats, amenities, pricePerHour } = req.body;
  const room = createRoom(numberOfSeats, amenities, pricePerHour);
  res.status(201).json(room);
};

const listRooms = (req, res) => {
  res.status(200).json(getRooms());
};

module.exports = { addRoom, listRooms };
