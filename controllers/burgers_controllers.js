// Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");
