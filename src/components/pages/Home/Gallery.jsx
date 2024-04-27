import styles from "./Home.module.css";
import { gallery } from "../../data.js";
import { BaseButton } from "../../widgets/BaseButton/BaseButton.jsx";
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useParams } from 'react-router-dom';

export const Gallery = () => {
    let urlFilter = useParams().filter

    const rows = [];
    let switcher = window.innerWidth >= 320 && window.innerWidth <= 435;
    let cardStyles = {};

    if (switcher) {
        cardStyles = {
            display: 'flex', flexDirection: 'column',
        };
    }

    for (let i = 0; i < gallery.length - 4; i = i + 5) {
        if (urlFilter === undefined) {
            rows.push(
                <div key={i} className={styles.galleryRow}>
                    <div style={{
                        display: 'flex', gap: '10px', flexDirection: switcher ? 'column' : 'row',
                    }}>
                        <Link to={`${gallery[i].url}`} className={styles.galleryCard}
                            style={{
                                backgroundImage: `url(${gallery[i].img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: switcher ? '100%' : '1260px', // Установите ширину и высоту по умолчанию
                                height: '708px', ...cardStyles// Замените значения на ваше усмотрение
                            }}
                        >
                            <div className={styles.infoCard}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <BaseButton text={gallery[i].tags[0]} />
                                    {gallery[i].tags.length > 1 && <BaseButton text={gallery[i].tags[1]} />}
                                </div>
                                <p>{gallery[i].name}</p>
                            </div>
                        </Link>

                        <Link to="#" className={styles.galleryCard} onClick={() => clickCard(gallery[i + 1])}
                            style={{
                                backgroundImage: `url(${gallery[i + 1].img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: '620px', // Установите ширину и высоту по умолчанию
                                height: '708px', ...cardStyles,// Замените значения на ваше усмотрение
                            }}
                        >
                            <div className={styles.infoCard}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <BaseButton text={gallery[i + 1].tags[0]} />
                                    {gallery[i + 1].tags.length > 1 && <BaseButton text={gallery[i + 1].tags[1]} />}
                                </div>
                                <p>{gallery[i + 1].name}</p>
                            </div>
                        </Link>
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div className={styles.galleryCard} onClick={() => clickCard(gallery[i + 1])}
                                style={{
                                    backgroundImage: `url(${gallery[i + 2].img})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: '620px',
                                    height: '348px', ...cardStyles
                                }}
                            >
                                <div className={styles.infoCard}>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <BaseButton text={gallery[i + 2].tags[0]} />
                                        {gallery[i + 2].tags.length > 1 && <BaseButton text={gallery[i + 1].tags[1]} />}
                                    </div>
                                    <p>{gallery[i + 2].name}</p>
                                </div>
                            </div>
                            <div className={styles.galleryCard} onClick={() => clickCard(gallery[i + 3])}
                                style={{
                                    backgroundImage: `url(${gallery[i + 3].img})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: '620px',
                                    height: '348px', ...cardStyles
                                }}
                            >
                                <div className={styles.infoCard}>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <BaseButton text={gallery[i + 3].tags[0]} />
                                        {gallery[i + 3].tags.length > 1 && <BaseButton text={gallery[i + 1].tags[1]} />}
                                    </div>
                                    <p>{gallery[i + 3].name}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.galleryCard} onClick={() => clickCard(gallery[i + 4])}
                            style={{
                                backgroundImage: `url(${gallery[i + 4].img})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                width: '1260px', // Установите ширину и высоту по умолчанию
                                height: '708px', ...cardStyles// Замените значения на ваше усмотрение
                            }}
                        >
                            <div className={styles.infoCard}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <BaseButton text={gallery[i + 4].tags[0]} />
                                    {gallery[i + 4].tags.length > 1 && <BaseButton text={gallery[i + 1].tags[1]} />}
                                </div>
                                <p>{gallery[i + 4].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (urlFilter === 'logo' && gallery[i].type === 'Логотип' || gallery[i + 1].type === 'Логотип' || gallery[i + 2].type === 'Логотип' || gallery[i + 3].type === 'Логотип' || gallery[i + 4].type === 'Логотип') {
            console.log(gallery[i])
        }

    }

    return (
        <div className={styles.gallery}>
            {rows}
        </div>
    );
};
