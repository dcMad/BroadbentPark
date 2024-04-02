// Slider Gallery Component
// This component is a slider gallery idea, it displays a list of images and allows the user to navigate trough more images trough a slider.
// If the user click on an image it is shown "highlithed" in the top

// David Avendano ,Google & Copilot :)

// Allows the use of useState
"use client";
import React from "react";
import { useState } from "react";
import styles from "./Gallery.module.css";
import PoiHeader from "../PoiHeader/PoiHeader";
import PoiFooter from "../PoiFooter/PoiFooter";

export default function Gallery({ header = "", images = [], backPath = "", numberOfImages = "", arLink}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const imagesPerScreen = numberOfImages;

  function handleClickImage(image) {
    setSelectedImage(image);
    setIsFullScreen(true);
  }

  function handleBackClick() {
    setIsFullScreen(false);
  }

  return (
    <div className={styles.container}>
      <PoiHeader
        // title={`${header} gallery`}
        path={isFullScreen ? undefined : backPath}
        onBackClick={isFullScreen ? handleBackClick : undefined}
      />
      {isFullScreen ? (
        <>
          <div className={styles.galleryTitle}>{`${header} gallery`}</div>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={selectedImage}
              alt="description"
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.galleryTitle}>{`${header} gallery`}</div>
          <div className={styles.imagesContainer}>
            {images.slice(0, imagesPerScreen).map((image, index) => (
              <img
                className={styles.thumbnail}
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleClickImage(image)}
              />
            ))}
          </div>
        </>
      )}
      <PoiFooter arLink={arLink}/>
    </div>
  );
}
