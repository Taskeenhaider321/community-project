const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

// Models
const User = require("./models/userModel");
const Room = require("./models/roomModel");
const Message = require("./models/messagesModel");

const cors = require("cors");
require("dotenv").config();
const app = express();
require("./db/connection");
app.use(cors());
app.use(express.json());

// routers imports
const userRoutes = require("./routes/userRoutes");
const roomRoutes = require("./routes/roomRoutes");
const { default: mongoose } = require("mongoose");

app.use(userRoutes);
app.use(roomRoutes);

const server = http.createServer(app);

const io = socketIo(server, {
  cors: "*",
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  console.log(token);
  // Verify token and authenticate user
  // If valid, proceed, otherwise disconnect
  next();
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on("send-message", async (messageData) => {
    const { roomId, content, senderId } = messageData;
    console.log(messageData);
    const newMessage = new Message({
      room: roomId,
      sender: senderId,
      content,
      timestamp: new Date(),
    });

    await newMessage.save();

    // Update room with recent message
    await Room.findByIdAndUpdate(roomId, {
      $push: { recentMessages: newMessage },
      $slice: -10,
    });

    io.to(roomId).emit("receive-message", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(9000, () => {
  console.log("Http server running on port 9000");
});
