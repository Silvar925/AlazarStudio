import styles from "./ServiceCard.module.css"
import { Arrow } from "../arrow/Arrow"

export const ServiceCard = ({ count, color, title, img }) => {
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <h2 style={{ color: color }}>{count}</h2>
                <h3>{title}</h3>
                <Arrow />
            </div>

            <img src={img} alt="#" />

        </div>
    )
}