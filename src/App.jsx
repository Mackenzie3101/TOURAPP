// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinations from "./pages/Destination";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search"; // ✅ new page we’ll create next
import ProtectedRoute from "./context/ProtectedRoute"; // ✅

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            
            {/* ✅ Protect destinations route */}
            <Route
              path="/destinations"
              element={
                <ProtectedRoute>
                  <Destinations />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
