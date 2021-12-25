import React from 'react';
import { useAuth } from '../useAuth/useAuth';
import { Navigate } from 'react-router-dom';

const UnProtectedRoute = ({ children }) => {
  // const { id } = useAuth();
  // return id ? <Navigate to='/main' /> : children;
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to='/main' /> : children;
};

export default UnProtectedRoute;
