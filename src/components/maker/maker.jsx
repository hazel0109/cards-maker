import React, { useState, useEffect } from 'react';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardEditor from '../cardEditor/cardEditor';
import CardPreview from '../cardPreview/cardPreview';
import { useAuth } from '../useAuth/useAuth';
import AuthService from '../../service/auth_service';

const Maker = ({ state }) => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    setUserInfo(auth);
  }, []);

  const onLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  const moveTo = () => {
    navigate('/test');
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardEditor moveTo={moveTo} />
        <CardPreview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
