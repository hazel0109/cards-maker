import React from 'react';
import styles from './cardEditor.module.css';

const CardEditor = ({ moveTo }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <button onClick={moveTo}>click</button>
    </section>
  );
};

export default CardEditor;
