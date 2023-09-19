// auth/hooks/useLogin.js
import { useState } from 'react';
import { loginUser } from '../services/auth'; // Import the API service function

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (userData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await loginUser(userData);
      // Handle successful login response here
    } catch (error) {
      setError(error.message || 'An error occurred during login.');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, login };
};
