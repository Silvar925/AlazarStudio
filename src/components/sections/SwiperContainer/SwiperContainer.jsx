import styles from "./SwiperContainer.module.css"
import { useState } from "react"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/navigation'

export const SwiperContainer = ({ info }) => {
    let spaceBetweenD = 50
    let slidesPerViewD = 3
    let width = '1300px'

    if (window.innerWidth >= 320 && window.innerWidth <= 435) {
        spaceBetweenD = 10
        slidesPerViewD = 1
        width = '400px'
    }

    const [swiper, setSwiper] = React.useState(null)

    const nexto = () => { swiper.slideNext() }
    const prevto = () => { swiper.slidePrev() }

    return (
        <div className={styles.container} style={{ width: width }}>
            {
                info !== undefined &&
                <h2>{info.title}</h2>
            }

            <Swiper
                spaceBetween={spaceBetweenD}
                slidesPerView={slidesPerViewD}
                style={{ width: '100%', height: '300px' }}
                onSwiper={(s) => { setSwiper(s) }}

                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
            >

                {
                    info !== undefined && info.images.map((item, index) => {
                        return (
                            <SwiperSlide key={index} ><img src={item} alt="#" /></SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className={styles.btnContainer}>
                <div className={styles.btn} onClick={prevto}><img src="aboutUS/arrow.png" alt="#" /></div>
                <div className={styles.btn} onClick={nexto}><img src="aboutUS/arrow2.png" alt="#" /></div>
            </div>
        </div>

    )
}