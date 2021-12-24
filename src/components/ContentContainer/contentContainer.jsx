import React from 'react';
import styles from './contentContainer.module.css';
import { useLocation } from 'react-router-dom';

const ContentContainer = ({ state }) => {
  // const { state } = useLocation();
  console.log(state);
  return (
    <section className={styles.content}>
      <div>Hello</div>
    </section>
  );
};

export default ContentContainer;
