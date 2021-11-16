var uri =
  "mongodb+srv://JarredL:77p0jqyqJre4ekbR@cluster0.hlhpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let bodyParser = require("body-parser");

require("dotenv").config();

app.use(cors());
app.use(express.static("public"));
app.get("/", (req, res) => {
  console.log("Directory name: " + __dirname);
  res.sendFile(__dirname + "/views/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

let exerciseSchema = new mongoose.Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: String,
});

let userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  log: [exerciseSchema] /*Puts the users exercises with their username*/,
});

let Exercise = mongoose.model("Exercise", exerciseSchema);
let User = mongoose.model("User", userSchema);
let responseObject = {};

app.post(
  "/api/users",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let newUser = new User({ username: req.body.username });
    newUser.save((error, savedUser) => {
      if (!error) {
        responseObject["username"] = savedUser.username;
        responseObject["_id"] =
          savedUser.id; /*mongodb auto saves IDs in a field called ID*/
        res.json(
          responseObject
        ); /*returning the object with the above fields completed*/
      }
    });
  }
);
/*This get request is to get the list of users*/
app.get("/api/users", (req, res) => {
  User.find({}, (error, arrayOfUsers) => {
    if (!error) {
      res.json(arrayOfUsers);
    }
  });
});

/*This post request is to add exercises to user's log*/
app.post(
  "/api/users/:_id/exercises",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let newExercise = new Exercise({
      description: req.body.description,
      duration: parseInt(req.body.duration),
      date: req.body.date,
    });
    if (newExercise.date === "") {
      newExercise.date = new Date().toISOString().substring(0, 10);
    }
    /*$push is a mongoDB function to add to database arrays*/
    User.findByIdAndUpdate(
      req.params._id,
      { $push: { log: newExercise } },
      { new: true },
      (error, updatedUser) => {
        let responseObject = {};
        responseObject["_id"] = updatedUser._id;
        responseObject["username"] = updatedUser.username;
        responseObject["date"] = new Date(newExercise.date).toDateString();
        responseObject["description"] = newExercise.description;
        responseObject["duration"] = newExercise.duration;
        res.json(responseObject);
      }
    );
  }
);

app.get("/api/users/:_id/logs", (req, res) => {
  User.findById(req.params._id, (error, result) => {
    if (!error) {
      let responseObject = result;

      if (req.query.from || req.query.to) {
        let fromDate = new Date(0);
        let toDate = new Date();

        if (req.query.from) {
          fromDate = new Date(req.query.from);
        }
        if (req.query.to) {
          toDate = new Date(req.query.to);
        }
        fromDate = fromDate.getTime();
        toDate = toDate.getTime();

        responseObjectObject.log = responseObject.log.filter((Exercise) => {
          let exerciseDate = new Date(Exercise.date).getTime();

          return exerciseDate >= fromDate && exerciseDate <= toDate;
        });
      }
      if (req.query.limit) {
        responseObject.log = responseObject.log.slice(0, req.query.limit);
      }

      responseObject["count"] = result.log.length;
      res.json(responseObject);
    }
  });
});
