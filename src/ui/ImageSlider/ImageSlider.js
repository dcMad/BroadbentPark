// Image Slider v1  - 3 images with prev and next buttons
"use client";
import React, { useState } from 'react';
import styles from './ImageSlider.module.css';

const ImageSlider = () => {
  const images = [
    '../assets/image1.png',
    '../assets/image2.png',
    '../assets/image3.png'
    
 
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <button onClick={prevSlide} className={styles.prevButton}>{'<'}</button>
        <img src={images[current]} alt={`Slide ${current}`} />
        <button onClick={nextSlide} className={styles.nextButton}>{'>'}</button>
      </div>

      {/* Dots for indicating the current slide */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${current === index ? styles.dotActive : styles.dotInactive}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;




// const images = [

//   // Placeholder with specific size
//   'https://via.placeholder.com/321x188/808080',
//   'https://via.placeholder.com/321x188/808080',
//   'https://via.placeholder.com/321x188/808080'
// ];

// const [current, setCurrent] = useState(0);

// // check array length and reset to 0 if it's the last image
// const nextSlide = () => {
//   setCurrent(current === images.length - 1 ? 0 : current + 1);
// };


// // check array length and reset to last image if it's the first image
// const prevSlide = () => {
//   setCurrent(current === 0 ? images.length - 1 : current - 1);
// };

// return (
//   <div>
//     {/* Previous Button */}
//     <button onClick={prevSlide}>Prev</button>
//     <img src={images[current]} alt={`Slide ${current}`} />

//     {/* Next Button */}
//     <button onClick={nextSlide}>Next</button>
//   </div>
// );