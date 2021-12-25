import React from 'react';
import styles from './contentContainer.module.css';
import { useNavigate } from 'react-router-dom';

const ContentContainer = ({ state }) => {
  // const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  const moveTo = () => {
    navigate('/test');
  };

  return (
    <section className={styles.content}>
      <div>Hello</div>
      <button onClick={moveTo}>click</button>
    </section>
  );
};

export default ContentContainer;
