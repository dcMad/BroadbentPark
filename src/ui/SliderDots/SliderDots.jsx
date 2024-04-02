import React from "react";
import styles from "./sliderDots.module.css";

export default function SliderDots({ total, currentIndex }) {
  return (
    <div className={styles.dots}>
      {Array(total)
        .fill()
        .map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${
              idx === currentIndex ? styles.active : ""
            }`}
          ></span>
        ))}
    </div>
  );
}
