import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Get_started.css";
import logo from "../images/as-logo.png";
import doctor from "../images/c.png";
import Practitioner from "../images/a.png";
import student from "../images/b.png";

const Get_Started = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="background"></div>
      <div className="blur-layer"></div>
      <div className="top-left">
        <img src={logo} alt="Logo" /> <p>AyurSage</p>
      </div>
      <div className="center-content">
        <p>Tell us about yourself.</p>
      </div>
      <div className="flex">
        <div className="glass-card">
          <div className="profile-cards">
            <img src={doctor} alt="Profile 1" />
          </div>
          <p>Doctor</p>
        </div>
        <Link to="/Student">
          <div className="glass-card">
            <div className="profile-cards">
              <img src={student} alt="Profile 1" />
            </div>
            <p>Student</p>
          </div>
        </Link>
        <div className="glass-card">
          <div className="profile-cards">
            <img src={Practitioner} alt="Profile 1" />
          </div>
          <p>Practitioner</p>
        </div>
      </div>
    </div>
  );
};

export default Get_Started;
