import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { auth } from "./Firebase"; // Ensure Firebase is initialized  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

