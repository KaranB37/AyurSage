import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";
import logo from "../images/as-logo.png";

function Login() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate to redirect to the desired path
    navigate("/Get_Started");
  };

  return (
    <div className="login-screen">
      <div className="left-column"></div>
      <div className="right-column">
        <img src={logo} alt="Logo" className="logo" />
        <h1>AyurSage</h1>
        <p>Login to your account</p>
        <hr />
        <input type="text" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
        <a href="#">Recover Password</a>
        <button onClick={handleButtonClick}>Login</button>
        <p>
          Create New Account? <Link to="/Register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
