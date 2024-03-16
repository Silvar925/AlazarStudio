import { Header } from "../../widgets/Header/Header"
import styles from "./AboutUS.module.css"
import { interpreterList } from "../../data"
import { BaseCard } from "../../widgets/BaseCard/BaseCard"

export const AboutUS = () => {
    return (
        <>
            <Header />
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
                    <BaseCard>
                    
                    </BaseCard>
                </div>

            </div>
        </>
    )
}