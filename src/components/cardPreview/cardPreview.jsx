import React from 'react';
import styles from './cardPreview.module.css';
import Card from '../card/card';

const CardPreview = ({ cards }) => {
  const list = cards.map((card) => <Card key={card.id} card={card} />);

  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>{list}</ul>
    </section>
  );
};

export default CardPreview;
