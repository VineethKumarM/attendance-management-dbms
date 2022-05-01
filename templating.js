const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Student = require("./models/student");
const User = require("./models/user");
const { get } = require("http");

app.set("view engine", "ejs");
app.use(express.static("public"));
const activity = require("./api.json");
const { v4: uuidv4 } = require("uuid");
uuidv4();
// console.log(activity)

//if the working dir has no views folder ans
//the executing file is also accsed with path then use
app.set("views", path.join(__dirname, "/views"));
//add the req path to views folder in the value string

app.get("/", (req, res) => {
	// console.log("We got a new request");
	res.render("index");
});

app.get("/ta", (req, res) => {
	// console.log("We got a new request");
	res.render("checkForm");
});

app.get("/:topic", (req, res) => {
	const { topic } = req.params;
	const data = activity[topic];
	res.render("activity", { ...data });
});

app.post("/attend", (req, res) => {
	const { course, year, branch } = req.body;

	res.send(RegisterredUser);
});

app.listen(3000, () => {
	console.log("Listening on port 3000");
});

//thought of making some subreddit type implementation
//but ended up wiht lack of patiende
//activity to do fro diff values in api.json
//error page
