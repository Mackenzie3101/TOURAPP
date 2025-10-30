// src/context/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(AuthContext);

  // if user not logged in, redirect
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // else render the protected page
  return children;
}

export default ProtectedRoute;
