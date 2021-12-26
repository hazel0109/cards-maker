import React from 'react';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardEditor.module.css';

const CardEditor = ({ cards }) => {
  const list = cards.map((card) => <CardEditForm key={card.id} card={card} />);

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>{list}</ul>
    </section>
  );
};

export default CardEditor;
