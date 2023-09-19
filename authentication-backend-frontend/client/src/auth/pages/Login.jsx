import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import '../pages/Login.css'
const Login = () => {
  return (
    <div
      className="login"
      
    >
      <div className="card">
        <h1 style={{ marginBottom: ".5rem" }}>Login</h1>
        <LoginForm />
        <span className="registerLine" style={{ marginTop: ".5rem" }}>
          Don't have an account? <Link to="/register">Register Here</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
