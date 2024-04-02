// Booking component for the slider

import React from 'react';
import styles from './SliderBooking.module.css';


export default function SliderBooking(){
    function handleClick (url) {
        window.location.href = url;
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <button className={`${styles.linkButton} ${styles.first}`} onClick={() => handleClick("https://www.oshawa.ca/en/parks-recreation-and-culture/events-in-the-park.aspx")}>
                    EVENTS IN THE PARK
                </button>
                <p className={`${styles.legend} ${styles.second}`}>
                    Looking to host your event here? 
                    <br></br>
                    Learn more about: 
                </p>
                <button className={`${styles.linkButton} ${styles.third}`} onClick={() => handleClick("https://www.oshawa.ca/en/parks-recreation-and-culture/host-an-event.aspx")}>
                    HOSTING AN EVENT
                </button>
                <button className={`${styles.linkButton} ${styles.fourth}`} onClick={() => handleClick("https://www.oshawa.ca/en/parks-recreation-and-culture/facilities-and-rentals.aspx")}>
                    FACILITY BOOKINGS
                </button>
            </div>
        </div>
    );
};