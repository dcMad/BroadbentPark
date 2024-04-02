import SliderDots from "../SliderDots/SliderDots";
import styles from "./poiSlide.module.css";

export default function PoiSlide({ children, imgSrc, imgAlt, dotsLength, dotsIndex }) {
  return (
    <article>
      <div className={styles.topWrapper}>
        <img className={styles.sliderImg} src={imgSrc} alt={imgAlt} />
        <SliderDots total={dotsLength} currentIndex={dotsIndex} />
      </div>
      {children}
    </article>
  );
}
