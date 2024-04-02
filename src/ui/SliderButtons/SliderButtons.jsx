import React, { useState } from "react";
import styles from "./sliderButtons.module.css";
import nextConfig from "../../../next.config.mjs";

export default function SliderButtons({ currentIndex, setCurrentIndex, info }) {
  const nextImage = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const prevImage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <>
      {currentIndex < info.length - 1 && (
        <button className={styles.next_button} onClick={nextImage}>
          <img src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/slider_arrow.png`} alt="Next slide button"/>
        </button>
      )}
      {currentIndex > 0 && (
        <button className={styles.prev_button} onClick={prevImage}>
          <img src={`${process.env.NODE_ENV === "production" ? nextConfig.basePath : ""}/assets/slider_arrow.png`} alt="Previous slide button"/>
        </button>
      )}
    </>
  );
}
