import React, { memo, useState } from 'react';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';
import styles from './cardAddForm.module.css';

const CardAddForm = memo(({ handleAddCard }) => {
  const initCard = {
    name: '',
    company: '',
    title: '',
    email: '',
    message: '',
    theme: 'light',
    fileName: '',
    fileURL: '',
  };
  const [card, setCard] = useState(initCard);

  const onFileChange = (file) => {
    setCard({ ...card, fileName: file.name, fileURL: file.url });
  };

  const handleInput = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!card.name) return;
    const info = { id: Date.now(), ...card };
    setCard(initCard);
    handleAddCard(info);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder='Name'
        type='text'
        name='name'
        value={card.name}
        onChange={handleInput}
      />
      <input
        className={styles.input}
        placeholder='Company'
        type='text'
        name='company'
        value={card.company}
        onChange={handleInput}
      />
      <select
        className={styles.select}
        name='theme'
        value={card.theme}
        onChange={handleInput}
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        placeholder='Title'
        type='text'
        name='title'
        value={card.title}
        onChange={handleInput}
      />
      <input
        className={styles.input}
        placeholder='Email'
        type='text'
        name='email'
        value={card.email}
        onChange={handleInput}
      />
      <textarea
        className={styles.textarea}
        name='message'
        placeholder='Message'
        value={card.message}
        onChange={handleInput}
      ></textarea>
      <ImageFileInput name={card.fileName} onFileChange={onFileChange} />
      <Button name='Add' type='submit' onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
