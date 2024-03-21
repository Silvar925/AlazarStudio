import styles from "./SwiperContainer.module.css";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

export const SwiperContainer = ({ info }) => {
    const [swiper, setSwiper] = useState(null);
    const [arrowColor, setArrowColor] = useState('black');

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            console.log(1)
            setArrowColor('white');
        } else {
            setArrowColor('black');
        }
    }, []);

    const nexto = () => swiper.slideNext();
    const prevto = () => swiper.slidePrev();

    let spaceBetweenD = 50;
    let slidesPerViewD = 3;
    let width = '1300px';

    if (window.innerWidth >= 320 && window.innerWidth <= 435) {
        spaceBetweenD = 10;
        slidesPerViewD = 1;
        width = '400px';
    }

    return (
        <div className={styles.container} style={{ width: width }}>
            {info && <h2>{info.title}</h2>}
            <Swiper
                spaceBetween={spaceBetweenD}
                slidesPerView={slidesPerViewD}
                style={{ width: '100%', height: '300px' }}
                onSwiper={(s) => setSwiper(s)}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true }}
            >
                {info && info.images.map((item, index) => (
                    <SwiperSlide key={index}><img src={item} alt="#" /></SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={prevto}>
                    <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.68848" y="13.6924" width="16" height="16" transform="rotate(-45 2.68848 13.6924)" stroke={arrowColor} strokeWidth="4" />
                    </svg>
                </div>
                <div className={styles.btn} onClick={nexto}>
                    <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="2.38037" width="16" height="16" transform="rotate(45 1 2.38037)" stroke={arrowColor} strokeWidth="4" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
