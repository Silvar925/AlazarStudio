import styles from "./ServiceCard.module.css"
import { Arrow } from "../../shared/arrow/Arrow";
import { useState } from "react"
import { serviceCard } from "../../helpers";
import { Link } from "react-router-dom";

export const ServiceCard = ({ count, color, title, img, to }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <h2 style={{ color: color }}>{count}</h2>
                <h3>{title}</h3>

                <Link to={`../${to}`} className={styles.button}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ border: `1px solid ${color}`, backgroundColor: isHovered ? color : 'white' }}
                >
                    <Arrow color={isHovered ? 'white' : color} background={isHovered ? color : 'white'} />
                </Link>

            </div>

            <img src={img} alt="#" />

        </div>
    )
}