import React from 'react';
// import styles from './mainContainer.module.css';
import Login from '../login/login';
import Test from '../test/test';
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
        <Route
          path='test'
          exact
          element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default MainContainer;
