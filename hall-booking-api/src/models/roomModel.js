let rooms = [];
let roomId = 1;

const createRoom = (numberOfSeats, amenities, pricePerHour) => {
  const room = { id: roomId++, numberOfSeats, amenities, pricePerHour };
  rooms.push(room);
  return room;
};

const getRooms = () => rooms;

const getRoomById = (id) => rooms.find(room => room.id === id);

module.exports = { createRoom, getRooms, getRoomById };
