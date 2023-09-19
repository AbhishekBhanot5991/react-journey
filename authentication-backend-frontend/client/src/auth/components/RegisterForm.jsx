import React, { useState } from "react";
import "../components/RegisterForm.css";
import { registerUser } from "../services/auth";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    tc: false,
  });
  const [nameError, setNameError] = useState(null); // Define the error state
  const [emailError, setEmailError] = useState(null); // Define the error state
  const [passwordError, setPasswordError] =useState(null);
  const handleFieldChange = (e) => {
    // console.log("hello");
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData, //spread the existing formdata
        [name]: checked, // update the field by name
      });
    } else {
      setFormData({
        ...formData, //spread the existing formdata
        [name]: value, // update the field by name
      });
    }

     // Clear the corresponding error state when the input field changes
     if (name === "name") {
      setNameError(null);
    } 
    else if (name === "email") {
      setEmailError(null);
    }
    else if (name === "password") {
      setEmailError(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, password_confirmation, tc } = formData;
    if (!name) {
      setNameError("Name is Reequired");
      return;
    }
    if (!email) {
      setEmailError("Email is Reequired");
      return;
    }
    if (!password) {
      setEmailError("Password is Reequired");
      return;
    }
    if(password !== password_confirmation){
      setPasswordError("Password do not match")
      return;
    }

    // Clear any previous error messages
    setNameError(null);
    setEmailError(null);
    setPasswordError(null);

    // Call the login function from the useAuth hook
    await registerUser({ name, email, password, password_confirmation, tc });

    // Clear the form fields after successful submission
    setFormData({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      tc: false,
    });
  };
  return (
    <div className="registerForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleFieldChange}
        />
        {nameError && <div className="error">{nameError}</div>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFieldChange}
        />
        {emailError && <div className="error">{emailError}</div>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleFieldChange}
        />
        {passwordError && <div className="error">{passwordError}</div>}
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          value={formData.password_confirmation}
          onChange={handleFieldChange}
        />
        <div className="checkboxContainer" >
        <input
          type="checkbox"
          name="tc"
          id=""
          value={formData.tc}
          onChange={handleFieldChange}
        />
        <span>agree to terms and conditions</span>
        </div>
        <button
          type="submit"
          style={{ width: "fit-content", padding: ".5rem 1rem" }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
