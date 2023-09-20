import React, { useState } from "react";
import "../components/LoginForm.css";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const { login } = useAuth(); // Use the login function from the hook
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleFieldChange = (e) => {
    // console.log("hello");
    const { name, value } = e.target;
    setFormData({
      ...formData, //spread the existing formdata
      [name]: value, // update the field by name
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const { email, password } = formData;
    try {
      const result = await login({ email, password });
        // Redirect to the dashboard on successful login
        if(result.status === "success"){
          navigate("/dashboard");
        }
 
    } catch (error) {
      console.error(error);
    }
  };
  


  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFieldChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleFieldChange}
        />
        <button
          type="submit"
          style={{ width: "fit-content", padding: ".5rem 1rem" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
