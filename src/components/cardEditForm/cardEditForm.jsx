import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card }) => {
  const { name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        placeholder='name'
        type='text'
        name='name'
        value={name}
      />
      <input
        className={styles.input}
        placeholder='company'
        type='text'
        name='company'
        value={company}
      />
      <select className={styles.select} name='theme' value={theme}>
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
      />
      <input
        className={styles.input}
        placeholder='email'
        type='text'
        name='email'
        value={email}
      />
      <textarea
        className={styles.textarea}
        name='message'
        value={message}
      ></textarea>
      <ImageFileInput />
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
