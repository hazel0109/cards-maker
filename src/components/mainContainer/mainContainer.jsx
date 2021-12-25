import React, { useState, useEffect } from 'react';
import styles from './mainContainer.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Login from '../login/login';
import Test from '../test/test';
import ContentContainer from '../ContentContainer/contentContainer';
import ProtectedRoute from '../protectedRoute/protectedRoute';
import UnProtectedRoute from '../unProtectedRoute/unProtectedRoute';
import AuthService from '../../service/auth_service';
import { Routes, Route } from 'react-router-dom';

const MainContainer = (props) => {
  return (
    <section className={styles.container}>
      <Header />
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
          path='main'
          exact
          element={
            <ProtectedRoute>
              <ContentContainer />
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
      <Footer />
    </section>
  );
};

export default MainContainer;
