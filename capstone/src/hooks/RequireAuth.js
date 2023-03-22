import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import React from "react";

const RequireAuth = () => {
  const { isAuth } = useAuth();

  // Checks if user is authorized (logged in), and if they are then they can access the protected routes
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
