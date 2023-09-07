// server/routes/yourRoutes.js

const express = require('express');
const router = express.Router();
const yourController = require('../controllers/yourController');

router.post('/register', yourController.register);
router.post('/login', yourController.login);


router.post('/create-user', yourController.createUser);
router.post('/create-employee', yourController.createEmployee);

router.get('/get-users', yourController.getUsers);
router.get('/get-employees', yourController.getEmployees);
// ...other routes
// Get a specific user by ID
router.get('/get-user/:id', yourController.getUserById);
router.get('/get-employee/:id', yourController.getEmployeeById);
// Update a user by ID
router.put('/update-user/:id', yourController.updateUser);

// Delete a user by ID
router.delete('/delete-user/:id', yourController.deleteUser);
router.delete('/delete-employee/:id', yourController.deleteEmployee);

module.exports = router;
