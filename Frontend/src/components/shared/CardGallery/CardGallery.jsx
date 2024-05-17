import styles from "./CardGallery.module.css"
import { Tag } from "../Tag/Tag.jsx";
import { Link } from "react-router-dom";

export const CardGallery = ({ className, style, img, name, tags, onClick, to }) => {
    return (<Link to={to} style={{
        backgroundImage: `url('${img}')`, ...style, cursor: 'pointer'
    }} className={`${styles.card} ${className}`}
        onClick={onClick}
    >

        <div className={styles.container}>

            {tags.length === 2 ? (<div className={styles.box}>
                <Tag name={tags[0]} />
                <Tag name={tags[1]} />
            </div>) : (<div className={styles.box}>
                <Tag name={tags[0]} />
            </div>)}

            <p>{name}</p>
        </div>

    </Link>)
}