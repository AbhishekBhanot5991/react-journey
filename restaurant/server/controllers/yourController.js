const User = require('../models/User');
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Employees = require('../models/Employee'); 

exports.createUser = async (req, res) => {
    try {
      const { name, username, phone, email } = req.body;
      // Check if the username is already exist or not
      const existingUser = await Users.findOne({ username });
      if (existingUser) {
        return res.status(400).json({
          error: 'Username already exists',
        });
      }
  
      const newUser = new Users({ name, username, email, phone });
      await newUser.save();
      res.status(201).json({
        message: 'User created Successfully',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'User Creation failed',
        details: error.message, // Log the specific error message for debugging
      });
    }
  };
  
  
  exports.getUsers = async(req,res)=>{
    try{
      //fetch all users from database
      const users = await Users.find();
  
      res.status(200).json(users);
    }
    catch(error){
      console.error(error);
      res.status(500).json({
        error:"failed to fetch Users"
      });
    }
  }
  
  // Get a specific user by ID
  exports.getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await Users.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  };
  
  // Update a user by ID
  exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, username, email, phone } = req.body;
  
      const updatedUser = await Users.findByIdAndUpdate(
        userId,
        { name, username, email, phone },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  };
  
  // Delete a user by ID
  exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
  
      const deletedUser = await Users.findByIdAndRemove(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  };

  // server/controllers/yourController.js



exports.register = async (req, res) => {
  try {
    const { username, name, password } = req.body;
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, name, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    // Generate a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  }
};

//Employees

exports.createEmployee = async (req, res) => {
  try {
    const { name, address, phone, email, salary} = req.body;

    const newEmployee = new Employees({ name, address, email, phone, salary });
    await newEmployee.save();
    res.status(201).json({
      message: 'Employee created Successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Employee Creation failed',
      details: error.message, // Log the specific error message for debugging
    });
  }
};

exports.getEmployees = async(req,res)=>{
  try{
    //fetch all users from database
    const employees = await Employees.find();

    res.status(200).json(employees);
  }
  catch(error){
    console.error(error);
    res.status(500).json({
      error:"failed to fetch Employees",
      details: error.message, 
    });
  }
}

  // Get a specific employee by ID
  exports.getEmployeeById = async (req, res) => {
    try {
      const employeeId = req.params.id;
      const employee = await Employees.findById(employeeId);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.status(200).json(employee);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch employee' });
    }
  };

  //delete employee

  exports.deleteEmployee = async (req, res) => {
    try {
      const employeeId = req.params.id;
  
      // Check if the employee exists
      const employee = await Employees.findById(employeeId);
  
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      // If the employee exists, proceed with deletion
      const deletedEmployee = await Employees.findByIdAndRemove(employeeId);
  
      res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete employee' });
    }
  };
  