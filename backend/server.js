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
// app.use(express.static(path.join(__dirname, "../frontend/public")));

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

app.listen(port, () => console.log(`Server started on port ${port}`));

// #################### WEB SOCKET ###########################

// TODO: for websocket to work we need to serve our reat app from this file!!!!

// const http = require("http");
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

// io.on("connection", (socket) => {
//   console.log("a user connected");
// });

// server.listen(4000, () => {
//   console.log("WS: listening on *:4000");
// });
