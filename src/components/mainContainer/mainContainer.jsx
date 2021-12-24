import React, { useState, useEffect } from 'react';
import styles from './mainContainer.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Login from '../login/login';
import ContentContainer from '../ContentContainer/contentContainer';
import ProtectedRoute from '../protectedRoute/protectedRoute';
import UnProtectedRoute from '../unProtectedRoute/unProtectedRoute';
import AuthService from '../../service/auth_service';
import { Routes, Route } from 'react-router-dom';

const MainContainer = (props) => {
  // const [err, setErr] = useState(null);
  // const [user, setUser] = useState(null);

  // const onUser = (user) => {
  //   setUser({ id: user.uid, name: user.displayName, pic: user.photoURL });
  // };

  // const onLogin = (event) => {
  //   AuthService.login(event.currentTarget.textContent)
  //     .then((data) => {
  //       onUser(data.user);
  //     })
  //     .catch((err) => {
  //       setErr(true);
  //     });
  // };

  // useEffect(() => {
  //   AuthService.onAuthChange((user) => {
  //     user && onUser(user);
  //   });
  //   console.log('check');
  // }, []);

  // return (
  //   <section className={styles.container}>
  //     <Header />
  //     <Routes>
  //       <Route
  //         path='/'
  //         exact
  //         element={
  //           <UnProtectedRoute user={user}>
  //             <Login onLogin={onLogin} />
  //           </UnProtectedRoute>
  //         }
  //       />
  //       <Route
  //         path='main'
  //         exact
  //         element={
  //           <ProtectedRoute user={user}>
  //             <ContentContainer user={user} />
  //           </ProtectedRoute>
  //         }
  //       />
  //     </Routes>
  //     <Footer />
  //   </section>
  // );

  return (
    <section className={styles.container}>
      <Header />
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route
          path='main'
          exact
          element={
            <ProtectedRoute>
              <ContentContainer />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </section>
  );
};

export default MainContainer;
