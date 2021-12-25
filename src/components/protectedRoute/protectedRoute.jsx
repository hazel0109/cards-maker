import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../useAuth/useAuth';
import AuthService from '../../service/auth_service';

const ProtectedRoute = ({ children }) => {
  // const { id } = useAuth();
  // return id ? children : <Navigate to='/' />;

  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
