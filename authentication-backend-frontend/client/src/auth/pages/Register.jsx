import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from 'react-router-dom'
import '../pages/Register.css'
const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      tc: false
    });
  
    const handleFieldChange = (e) => {
      const { name, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
  
      setFormData({
        ...formData,
        [name]: newValue
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Call your API login function here if needed
      // Clear the form fields after successful submission
      console.log('Form data:', formData);
      // Optionally, you can clear the form fields after successful registration
      setFormData({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        tc: false
      });
    };
  return (
    <div className="register">
      <div className="card">
        <h1 style={{ marginBottom: ".5rem" }}>Register</h1>
        <RegisterForm formData={formData} handleFieldChange={handleFieldChange} handleSubmit={handleSubmit}  />
        <span className='loginLine' style={{ marginTop: ".5rem" }}>
          Already have an account? <Link to="/login">Login Here</Link>
        </span>
      </div>
    </div>
  )
}

export default Register