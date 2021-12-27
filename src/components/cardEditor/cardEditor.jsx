import React from 'react';
import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../cardAddForm /cardAddForm';
import styles from './cardEditor.module.css';

const CardEditor = ({ cards, handleAddCard }) => {
  const list = cards.map((card) => <CardEditForm key={card.id} card={card} />);

  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul>{list}</ul>
      <CardAddForm handleAddCard={handleAddCard} />
    </section>
  );
};

export default CardEditor;
