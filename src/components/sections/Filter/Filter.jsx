import styles from "./Filter.module.css"
import { Link, useParams } from "react-router-dom";

export const Filter = ({ url }) => {

    return (
        <ul className={styles.buttonList}>
            <li><Link to='/logo'>Логотип</Link></li>
            <li><Link to='/webDesign'>Web-дизайн</Link></li>
            <li><Link to='/mobileApplication'>Мобильные приложения</Link></li>
            <li><Link to='/presentation'>Презентации</Link></li>
            <li><Link to='/promotionalProducts'>Рекламная продукция</Link></li>
            <li><Link to='/videos'>Видео</Link></li>
        </ul >
    )
}