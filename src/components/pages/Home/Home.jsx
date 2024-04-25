import styles from "./Home.module.css"
import {Header} from "../../widgets/Header/Header"
import {Filter} from "../../sections/Filter/Filter"
import {Footer} from "../../widgets/Footer/Footer"
import {gallery} from "../../data.js";

export const Home = () => {

    return (
        <>
            <Header/>

            <section className={styles.container}>
                <Filter/>

                <div className={styles.gallery}>
                    {row()}
                </div>

            </section>

            <Footer/>
        </>
    )
}

const row = () => {
    const rows = [];

    for (let i = 0; i < gallery.length - 4; i = i + 5) {
        rows.push(
            <div key={i} className={styles.galleryRow}>
                <div style={{display: 'flex', gap: '10px'}}>
                    <div className={styles.galleryCard}
                        style={{
                            backgroundImage: `url(${gallery[i].img})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '1260px', // Установите ширину и высоту по умолчанию
                            height: '708px', // Замените значения на ваше усмотрение
                        }}
                    >
                        <button>asd</button>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${gallery[i + 1].img})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '620px', // Установите ширину и высоту по умолчанию
                            height: '708px', // Замените значения на ваше усмотрение
                        }}
                    />
                </div>

                <div style={{display: 'flex', gap: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <div
                            style={{
                                backgroundImage: `url(${gallery[i + 2].img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: '620px', // Установите ширину и высоту по умолчанию
                                height: '348px', // Замените значения на ваше усмотрение
                            }}
                        />
                        <div
                            style={{
                                backgroundImage: `url(${gallery[i + 3].img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: '620px', // Установите ширину и высоту по умолчанию
                                height: '348px', // Замените значения на ваше усмотрение
                            }}
                        />
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${gallery[i + 4].img})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '1260px', // Установите ширину и высоту по умолчанию
                            height: '708px', // Замените значения на ваше усмотрение
                        }}
                    />
                </div>
            </div>
        );
    }

    return rows;
}

