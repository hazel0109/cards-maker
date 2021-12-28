import React, { useState } from 'react';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const { name, company, title, email, message, theme, fileName } = card;
  const [editBtn, setEditBtn] = useState(false);
  const [btnEditName, setBtnEditName] = useState('Edit');

  const onFileChange = (file) => {
    if (!editBtn) return;
    updateCard({ ...card, fileName: file.name, fileURL: file.url });
  };

  const handleInput = (e) => {
    if (e.currentTarget === null || !editBtn) return;
    e.preventDefault();
    updateCard({ ...card, [e.target.name]: e.target.value });
  };

  const onEdit = (e) => {
    e.preventDefault();
    if (editBtn) {
      setBtnEditName('Edit');
      setEditBtn(false);
    } else if (!editBtn) {
      setBtnEditName('Save');
      setEditBtn(true);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(card.id);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder='name'
        type='text'
        name='name'
        value={name}
        onChange={handleInput}
      />
      <input
        className={styles.input}
        placeholder='company'
        type='text'
        name='company'
        value={company}
        onChange={handleInput}
      />
      <select
        className={styles.select}
        name='theme'
        value={theme}
        onChange={handleInput}
      >
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        className={styles.input}
        placeholder='title'
        type='text'
        name='title'
        value={title}
        onChange={handleInput}
      />
      <input
        className={styles.input}
        placeholder='email'
        type='text'
        name='email'
        value={email}
        onChange={handleInput}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
        onChange={handleInput}
      ></textarea>
      <ImageFileInput name={fileName} onFileChange={onFileChange} />
      <Button name={btnEditName} onClick={onEdit} />
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
