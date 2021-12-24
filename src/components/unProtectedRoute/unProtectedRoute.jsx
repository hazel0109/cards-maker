import React from 'react';
import { Navigate } from 'react-router-dom';

const UnProtectedRoute = ({ children, user }) => {
  return user ? <Navigate to='/main' /> : children;
};

export default UnProtectedRoute;
