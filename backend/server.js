const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.SERVER_PORT || 8080;
const path = require("path");
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const User = require("./config/model");
// Main route serving react app
app.use(express.static(path.join(__dirname, "../frontend/build")));

//Get user
app.get("/users/:email", async (req, res) => {
  const searchUser = await User.findOne({ email: req.params.email });

  if (!searchUser) {
    res.status(400);
    throw new Error("User not found");
  }

  res.status(200).json(searchUser);
});

//Create new user
app.post("/users", async (req, res) => {
  const newUser = await User.create(req.body);

  console.log(req.body);
  res.status(200).json(newUser);
});

// #################### WEB SOCKET ###########################

// TODO: start implementing web socket use this shit below

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

server.listen(port, () => {
  console.log(`WS: listening on *:${port}`);
});
