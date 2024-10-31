// 1. server.js - Main server file
// This file sets up our server and defines our API routes

// Import express to create a web server
const express = require("express");
const userRoutes = require("./userRoutes");

// Create a new express application
const app = express();

// Enable CORS to allow requests from React
const cors = require("cors");
app.use(cors());

// Allow server to read JSON data from requests
app.use(express.json());

app.use("/api", userRoutes);

// Listen for client requests on port 3000
app.listen(3005, function () {
  console.log("Server started! Running on http://localhost:3005");
});

// Export app so we can use it in other files
module.exports = app;
