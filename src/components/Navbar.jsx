import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">Tour & Travel</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/destinations" className="text-gray-700 hover:text-blue-600">Destinations</Link>
        <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
        <Link to="/signup" className="text-gray-700 hover:text-blue-600">Sign Up</Link>
        <Link to="/search" className="text-gray-700 hover:text-blue-600">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;