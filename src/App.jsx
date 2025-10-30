import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destination";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { auth } from "./Firebase"; // Ensure Firebase is imported if needed

function App() {
  return (
    <Router>
      {/* ⬇️ Wrap everything in a flex column that fills the screen height */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* ⬇️ This makes the Routes area expand and push footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
