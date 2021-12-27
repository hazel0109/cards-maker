import React, { useRef } from 'react';
import styles from './imageFileInput.module.css';
import ImageUploader from '../../service/imageUploader';

const ImageFileInput = ({ name, onFileChange }) => {
  const inputRef = useRef();
  const onBtnClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (e) => {
    const result = await ImageUploader.upload(e.target.files[0]);
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
      <button className={styles.button} onClick={onBtnClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};

export default ImageFileInput;
