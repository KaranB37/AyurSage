import React from "react";
import logo from "../images/as-logo.png";
import student from "../images/b.png";
import "../styles/Details.css";

const Student = () => {
  return (
    <div className="container">
      <div className="background"></div>
      <div className="blur-layer"></div>
      <div className="top-left">
        <img src={logo} alt="Logo" /> <p>AyurSage</p>
      </div>
      <div className="center-content-new">
        <div className="profile-card">
          <img src={student} alt="Profile 1" className="img-float" />
          <p>Student</p>
        </div>
      </div>
      <div className="disp">
        <div className="flex-details">
          <div className="row">
            <div className="column">
              <label for="first_name">First Name:</label>
              <input type="text" id="first_name" name="first_name" />
            </div>
            <div className="column">
              <label for="institution_name">Enter your College ID:</label>
              <input
                type="text"
                id="institution_name"
                name="institution_name"
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label for="last_name">Last Name:</label>
              <input type="text" id="last_name" name="last_name" />
            </div>
            <div className="column">
              <label for="qualification">Enter your College Name:</label>
              <input type="text" id="qualification" name="qualification" />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label for="registration_no">What are you pursing?</label>
              <input type="text" id="registration_no" name="registration_no" />
            </div>
            <div className="column">
              <label for="phone_no">Enter your phone no:</label>
              <input type="text" id="phone_no" name="phone_no" />
            </div>
          </div>
          <div className="row">
            <div className="column2">
              <button> Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
