import React, { useState, useRef } from 'react';
import styles from './imageFileInput.module.css';
import ImageUploader from '../../service/imageUploader';

const ImageFileInput = ({ name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const onBtnClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    setLoading(true);
    const result = await ImageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({ name: result.original_filename, url: result.url });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='file'
        accept='image/*'
        name='file'
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
          onClick={onBtnClick}
        >
          {name || 'No file'}
        </button>
      )}
      {loading && <div className={styles.loading}></div>}
    </div>
  );
};

export default ImageFileInput;
