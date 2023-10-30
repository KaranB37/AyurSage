import React from "react";
import { Link } from "react-router-dom";
import "../styles/Get_started.css";
import logo from "../images/as-logo.png";
import doctor from "../images/c.png";
import Practitioner from "../images/a.png";
import student from "../images/b.png";

const Get_Started = () => {
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
        <Link to="/Practitioner">
          <div className="glass-card">
            <div className="profile-cards">
              <img src={doctor} alt="Profile 1" />
            </div>
            <p>Practitioner</p>
          </div>
        </Link>
        <Link to="/Student">
          <div className="glass-card">
            <div className="profile-cards">
              <img src={student} alt="Profile 1" />
            </div>
            <p>Student</p>
          </div>
        </Link>
        <Link to="/Practitioner">
          <div className="glass-card">
            <div className="profile-cards">
              <img src={Practitioner} alt="Profile 1" />
            </div>
            <p>Practitioner</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Get_Started;
