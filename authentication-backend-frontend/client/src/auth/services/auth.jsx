// auth/services/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/user'; // Replace with your actual API URL

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Include the token in the request headers
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
