"use client";
import React from 'react';
import styles from './components.module.css';

const ButtonBook = ({ onClick }) => {
  return (
    <button className={styles.book_btn} onClick={onClick}>
      Book Now
    </button>
  );
};

export default ButtonBook;
