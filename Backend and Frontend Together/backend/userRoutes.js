// 2. userRoutes.js - Contains all our API endpoints
const express = require("express");
const router = express.Router();

// Store users in a simple array (our "database")
let users = [{ id: 1, name: "John", age: 25 }];

// GET /users - Get all users
router.get("/users", function (request, response) {
  // Simply return all users
  response.json(users);
});

// POST /users - Create a new user
router.post("/users", function (request, response) {
  // Get name and age from the request body
  const userName = request.body.name;
  const userAge = request.body.age;

  // Create a new user object
  const newUser = {
    id: users.length + 1, // Simple way to generate ID
    name: userName,
    age: userAge,
  };

  // Add to our users array
  users.push(newUser);

  // Send back the new user
  response.json(newUser);
});

// PUT /users/:id - Update a user
router.put("/users/:id", function (request, response) {
  // Get the user ID from URL
  const userId = Number(request.params.id);

  // Get updated info from request body
  const newName = request.body.name;
  const newAge = request.body.age;

  // Find and update the user
  let userFound = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      users[i].name = newName;
      users[i].age = newAge;
      response.json(users[i]);
      userFound = true;
      break;
    }
  }

  if (!userFound) {
    response.status(404).json({ message: "User not found" });
  }
});

// DELETE /users/:id - Delete a user
router.delete("/users/:id", function (request, response) {
  // Get the user ID from URL
  const userId = Number(request.params.id);

  // Find and remove the user
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      users.splice(i, 1);
      response.json({ message: "User deleted successfully" });
      return;
    }
  }

  response.status(404).json({ message: "User not found" });
});

module.exports = router;
