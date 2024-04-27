import styles from "./AboutUS.module.css"
import { interpreterList, ourTeam, thanks, qualification } from "../../data"
import { BaseCard } from "../../widgets/BaseCard/BaseCard"
import { Footer } from "../../widgets/Footer/Footer"
import { SwiperContainer } from "../../sections/SwiperContainer/SwiperContainer"
import { useState, useEffect } from "react"

export const AboutUS = () => {
    const [iconTheme, setIconTheme] = useState('white')

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setIconTheme('black');
        } else {
            setIconTheme('white');
        }
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.aboutUS}>
                    <h2>О нас</h2>
                    <p>
                        Alazar studio — это команда профессионалов, специализирующихся на разработке и
                        внедрении информационных технологий. Мы предлагаем широкий спектр услуг, начиная от
                        создания сайтов и мобильных приложений до разработки сложных программных систем и интеграции
                        с существующими решениями.
                    </p>
                </div>

                <div className={styles.banner}>
                    <img src="aboutUS/aboutUS.png" alt="aboutUS" />
                </div>

                <div className={styles.interpreterList}>
                    {
                        interpreterList.map((item, index) => {
                            return (
                                < BaseCard key={index} img={
                                    iconTheme === 'white' ? item.img[0] : item.img[1]
                                } imgHeight="100px" imgWidth="100px" text={item.text} />
                            )
                        })
                    }
                </div>

                <div className={styles.ourTeamContainer}>
                    <div className={styles.ourTeamGrid}>
                        {
                            ourTeam.map((item, index) => {
                                return (
                                    <BaseCard key={index} img={item.img} imgHeight="495px" imgWidth="395px" text={item.name} specialization={item.specialization} />
                                )
                            })
                        }
                    </div>
                </div>

                <div className={styles.ourMissionСontainer}>
                    <p>НАША МИССИЯ</p>
                    <p>
                        помогать бизнесу становиться более эффективным и конкурентоспособным за счет использования современных
                        информационных технологий. Мы стремимся создавать продукты и решения, которые будут полезны и востребованы на
                        рынке, и помогаем нашим клиентам достигать успеха и развития в своей отрасли.
                    </p>
                </div>

                <SwiperContainer info={thanks} />
                <SwiperContainer info={qualification} />
            </div>

        </>
    )
}


