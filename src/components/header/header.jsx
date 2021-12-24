import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img
        className={styles.logo}
        src='/images/logo.png'
        alt='card maker logo'
      />
      <h1 className={`${styles.title} ${styles.white}`}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
