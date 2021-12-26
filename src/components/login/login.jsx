import React, { useState } from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../service/auth_service';

const Login = (props) => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const onLogin = (event) => {
    AuthService.login(event.currentTarget.textContent)
      .then((data) => {
        navigate('/main');
      })
      .catch((err) => {
        setErr(true);
      });
  };

  return (
    <section className={styles.container}>
      <Header />
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
        {err && <div>please signin again</div>}
      </section>
      <Footer />
    </section>
  );
};

export default Login;
