import React, { useState, useEffect } from 'react';
import styles from './login.module.css';
// import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../service/auth_service';

const Login = (props) => {
  const navigate = useNavigate();
  // const result = useAuth();

  // console.log(useAuth);
  // console.log(result);

  const onLogin = (event) => {
    // console.log(login);
    // login(event.currentTarget.textContent).then(() => navigate('/main'));
    // navigate('/main');
    AuthService.login(event.currentTarget.textContent)
      .then((data) => {
        // updateUser(data.user);
        // setAuthed(true);
      })
      .catch((err) => {
        // setErr(true);
      });
  };

  // useEffect(() => {
  //   AuthService.onAuthChange((user) => {
  //     user && navigate('/main', { state: user });
  //   });
  // }, []);

  return (
    <section className={styles.main}>
      <h1 className={styles.title}> Login </h1>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onLogin}>
          Google
        </button>
        <button className={styles.button} onClick={onLogin}>
          Github
        </button>
      </div>
    </section>
  );
};

export default Login;
