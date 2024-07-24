const express = require('express');
const { addRoom, listRooms } = require('../controllers/roomController');

const router = express.Router();

router.post('/', addRoom);
router.get('/', listRooms);

module.exports = router;
