// server/routes/yourRoutes.js

const express = require('express');
const router = express.Router();
const yourController = require('../controllers/yourController');

router.post('/register', yourController.register);
router.post('/login', yourController.login);


router.post('/create-user', yourController.createUser);
router.get('/get-users', yourController.getUsers);

// ...other routes
// Get a specific user by ID
router.get('/get-user/:id', yourController.getUserById);

// Update a user by ID
router.put('/update-user/:id', yourController.updateUser);

// Delete a user by ID
router.delete('/delete-user/:id', yourController.deleteUser);

module.exports = router;
