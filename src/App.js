import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import the necessary components

import SplashScreen from "./components/SplashScreen";
import Login from "./components/Login";
import Register from "./components/Register";
import GetStarted from "./components/Get_Started";
import Student from "./components/Student";
import Practitioner from "./components/Practitioner";
import Patient from "./components/Patient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/splash" />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Get_Started" element={<GetStarted />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Practitioner" element={<Practitioner />} />
        <Route path="/Patient" element={<Patient />} />
      </Routes>
    </Router>
  );
}

export default App;
