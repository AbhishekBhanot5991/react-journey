// server/models/User.js

const mongoose = require('mongoose');

const employeesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  salary:{
    type: Number,
    required: true,
  }

});

module.exports = mongoose.model('Employees', employeesSchema);
