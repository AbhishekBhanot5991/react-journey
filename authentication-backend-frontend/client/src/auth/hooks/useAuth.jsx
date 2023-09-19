// auth/hooks/useAuth.js
import { useState } from 'react';
import { loginUser } from '../services/auth';
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null); // Retrieve token from localStorage

  const login = async (userData) => {
    // Implement your login logic here and update the user state
    try {
      // Call the loginUser function from the service here
      const response = await loginUser(userData);
      const { user, token } = response;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      // Update the user and token state
      setUser(user);
      setToken(token);
      // const user = await loginUser(userData);
      // setUser(user);
    } catch (error) {
      // Handle login error
      console.log(error)
    }
  };

  const logout = () => {
    // Implement your logout logic here
    // Clear the token from localStorage and reset the user and token state
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  return { user, login, logout };
};
