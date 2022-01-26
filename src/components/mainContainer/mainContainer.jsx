import React from 'react';
import Login from '../login/login';
import ProtectedRoute from '../protectedRoute/protectedRoute';
import UnProtectedRoute from '../unProtectedRoute/unProtectedRoute';
import { Routes, Route } from 'react-router-dom';
import Maker from '../maker/maker';

const MainContainer = (props) => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          }
        />
        <Route
          path='login'
          exact
          element={
            <UnProtectedRoute>
              <Login />
            </UnProtectedRoute>
          }
        />
        <Route
          path='main'
          exact
          element={
            <ProtectedRoute>
              <Maker />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default MainContainer;
