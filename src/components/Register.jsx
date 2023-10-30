import React from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";

import logo from "../images/as-logo.png";

function Register() {
  return (
    <div className="register-screen">
      <div className="left-column-register"></div>
      <div className="right-column-register">
        <img src={logo} alt="Logo" className="logo" />
        <h1>AyurSage Registration</h1>
        <p>Create a new account</p>
        <hr />
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Enter Your Email" />
        <input type="password" placeholder="Create a Password" />
        <label>
          <input type="checkbox" />I agree to the Terms and Conditions
        </label>
        <button>Register</button>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
