import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Destinations from "./Components/Destination.jsx";
import Login from "./Components/Login.jsx";
import Footer from "./Components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/login" element={<Login />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
