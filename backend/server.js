const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.SERVER_PORT || 8080;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Get user by email
//TODO: make this a call to mongodb
app.get("/users/:email", (req, res) => {
  let userEmail = req.params.email;
  if (!userEmail) {
    res.send(400);
    throw new Error("User not found");
  }

  res.status(200).json({
    email: "real2@gmail.com",
    name: "BeBe Hoffman",
    age: 1,
    sexe: "female",
    password: "passss",
  });
});

//Create new user
app.post("/users", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => console.log(`Server started on port ${port}`));

//Couple hardcoded users
const users = [
  {
    email: "mail@gmail.com",
    name: "Hugh Corbo",
    age: 32,
    sexe: "male",
    password: "dlsaf;j",
  },
  {
    email: "realone@gmail.com",
    name: "Ard Mor",
    age: 10,
    sexe: "female",
    password: "dsfqr;j",
  },
  {
    email: "real2@gmail.com",
    name: "Moose Hoffman",
    age: 11,
    sexe: "female",
    password: "passss",
  },
  {
    email: "real2@gmail.com",
    name: "BeBe Hoffman",
    age: 1,
    sexe: "female",
    password: "passss",
  },
];
