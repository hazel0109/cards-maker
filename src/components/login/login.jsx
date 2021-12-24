import React, { useState, useEffect } from 'react';
import styles from './login.module.css';
import AuthService from '../../service/auth_service';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  // const Login = ({ onLogin }) => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const goToMain = (user) => {
    navigate('/main', { state: user });
  };

  const onLogin = (event) => {
    AuthService.login(event.currentTarget.textContent)
      .then((data) => {
        goToMain({
          id: data.user.uid,
          name: data.user.displayName,
          pic: data.user.photoURL,
        });
      })
      .catch((err) => {
        setErr(true);
      });
  };

  useEffect(() => {
    AuthService.onAuthChange((user) => {
      user &&
        goToMain({ id: user.uid, name: user.displayName, pic: user.photoURL });
    });
    console.log('check');
  }, []);

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
