import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, user }) => {
  const { state } = useLocation();
  console.log(state);
  console.log(children);
  return state ? children : <Navigate to='/' />;
  // return user ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
