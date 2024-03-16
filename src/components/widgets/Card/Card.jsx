import styles from "./Card.module.css"

export const Card = ({ width, height, img, textTitle, children }) => {
    if (window.innerWidth >= 320 && window.innerWidth <= 435) {
        width = '300px'   
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card} style={{ width: width, height: height, backgroundImage: `url(${img})` }}>
                <div className={styles.buttonList}>
                    {children}
                </div>
            </div>

            {
                textTitle !== undefined &&
                <div className={styles.title}>
                    <h3>{textTitle[0]}</h3>
                    <h2>{textTitle[1]}</h2>
                </div>
            }
        </div>
    )
}