import React, { useState, useEffect, useCallback } from 'react';
import styles from './maker.module.css';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import CardEditor from '../cardEditor/cardEditor';
import CardPreview from '../cardPreview/cardPreview';
import { useAuth } from '../useAuth/useAuth';
import AuthService from '../../service/auth_service';
import CardRepository from '../../service/cardRepository';

const Maker = ({ state }) => {
  const [userInfo, setUserInfo] = useState({});
  const [cards, setCards] = useState({});
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    setUserInfo(auth);
  }, []);

  useEffect(() => {
    if (!userInfo) return;
    const stopSync = CardRepository.syncCards(userInfo.id, (cards) => {
      setCards(cards);
    });
    return () => stopSync();
  }, [userInfo]);

  const onLogout = useCallback(() => {
    AuthService.logout();
    navigate('/login');
  });

  const handleAddCard = (card) => {
    setCards({ ...cards, [card.id]: card });
    CardRepository.saveCard(userInfo.id, card);
  };

  const updateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    CardRepository.saveCard(userInfo.id, card);
  };

  const deleteCard = (cardId) => {
    setCards((cards) => {
      const list = { ...cards };
      delete list[cardId];
      return list;
    });
    CardRepository.removeCard(userInfo.id, cardId);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <CardEditor
          cards={cards}
          handleAddCard={handleAddCard}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
