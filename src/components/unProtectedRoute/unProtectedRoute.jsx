import React from 'react';
import { useAuth } from '../useAuth/useAuth';
import { Navigate } from 'react-router-dom';

const UnProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to='/main' /> : children;
};

export default UnProtectedRoute;
