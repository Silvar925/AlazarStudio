import styles from "./ServiceCard.module.css"
import { Arrow } from "../arrow/Arrow"
import { useState } from "react"

export const ServiceCard = ({ count, color, title, img }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <h2 style={{ color: color }}>{count}</h2>
                <h3>{title}</h3>

                <a href="#"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ border: `1px solid ${color}`, backgroundColor: isHovered ? color : 'white' }}
                >
                    <Arrow color={isHovered ? 'white' : color} />
                </a>

            </div>

            <img src={img} alt="#" />

        </div>
    )
}