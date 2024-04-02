import React from 'react';
import styles from './poiFooterButton.module.css';

const Button = ({ imgSrc, link, altText }) => {
    return (
        <a href={link} className={styles.footer_link}>
            <img className={styles.footer_link_img} src={imgSrc} alt={altText}/>
        </a>
    );
};

export default Button;