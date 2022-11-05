const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.SERVER_PORT || 8080;
const path = require("path");
const cors = require("cors");

//Connecting to mongo
connectDB();

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "../frontend/build")));

//Loading models
const User = require("./config/userModel");
const Room = require("./config/roomModel");

/**
 * USER ROUTES
 */
//Get user
app.get("/users/:email", async (req, res) => {
  const searchUser = await User.findOne({ email: req.params.email });

  if (!searchUser) {
    res.status(400).json("User not found");
  }

  res.status(200).json(searchUser);
});

//Create new user
app.post("/users", async (req, res) => {
  const newUser = await User.create(req.body);

  console.log(req.body);
  res.status(200).json(newUser);
});
/**
 * ROOM ROUTES (Websocket rooms)
 */
//Create room
app.post("/room", async (req, res) => {
  const newRoom = await Room.create(req.body);

  console.log(req.body);
  res.status(200).json(newRoom);
});

//Get available room
app.get("/room", async (req, res) => {
  const room = await Room.findOne({ isAvailable: true });

  if (!room) {
    res.status(400).json("No available rooms, please try again later");
  } else {
    //Delete the room so it is no longer available to join
    await Room.deleteOne({ roomNumber: room.roomNumber });
  }
  res.status(200).json(room);
});

// #################### WEB SOCKET ###########################
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${port}`,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  let room;
  console.log(`user connected: ${socket.id}`);

  //Listen for join_room event
  socket.on("join_room", (data) => {
    room = data.toString();
    //Join the web socket room
    socket.join(room);
    console.log(`joined room ${room}`);
  });

  //When receiving a message from the client
  socket.on("client_message", (data) => {
    //Emit a server message to all clients in room
    io.to(room).emit("server_message", data);
  });
});

server.listen(port, () => {
  console.log(`WS: listening on *:${port}`);
});
