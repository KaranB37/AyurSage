import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";
import logo from "../images/as-logo.png";

function SplashScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Login");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={logo} alt="Logo" className="logo" />
      <p className="splash-text">AyurSage</p>
    </div>
  );
}

export default SplashScreen;
