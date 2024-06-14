const express = require("express");
const roomController = require("../controllers/roomController");
const router = express.Router()

router.post('/create-room', roomController.createRoom)
router.get('/personal-rooms', roomController.getPersonalRooms)

module.exports = router