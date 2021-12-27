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
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Hazel',
      company: 'Ramp',
      theme: 'light',
      title: 'Software Engineer',
      email: 'hazel@gmail.com',
      message: 'go for it',
      fileName: 'hazel',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Jimmy',
      company: 'Clearmax',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'jimmy@gmail.com',
      message: 'go for it',
      fileName: 'jimmy',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'John',
      company: 'Apple',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'john@gmail.com',
      message: 'go for it',
      fileName: 'john',
      fileURL: null,
    },
  });
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    setUserInfo(auth);
  }, []);

  const onLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  const handleAddCard = (card) => {
    setCards({ ...cards, [card.id]: card });
  };

  const updateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      // console.log(updated);
      return updated;
    });
  };

  const deleteCard = (cardId) => {
    setCards((cards) => {
      const list = { ...cards };
      delete list[cardId];
      return list;
    });
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
