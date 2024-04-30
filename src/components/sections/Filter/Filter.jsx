import { Link, useLocation } from "react-router-dom";
import styles from "./Filter.module.css";

export const Filter = ({ onClick, url }) => {
    const location = useLocation().pathname;

    const isActive = (path) => {
        return location === path ? { backgroundColor: 'black', color: 'white' } : {};
    };


    let newUrl;

    if (url === '/') {
        newUrl = url
    } else {
        newUrl = `/${url}`;
    }

    return (
        <ul className={styles.buttonList}>
            <li><Link to={''} onClick={onClick(true)} style={isActive(url)}>Все</Link></li>
            <li><Link to={`${newUrl}logo`} onClick={onClick(false)} style={isActive(`${newUrl}logo`)}>Логотип</Link></li>
            <li><Link to={`${newUrl}webDesign`} onClick={onClick(false)} style={isActive(`${newUrl}webDesign`)}>Web-дизайн</Link></li>
            <li><Link to={`${newUrl}mobileApplication`} onClick={onClick(false)} style={isActive(`${newUrl}mobileApplication`)}>Мобильные приложения</Link></li>
            <li><Link to={`${newUrl}presentation`} onClick={onClick(false)} style={isActive(`${newUrl}presentation`)}>Презентации</Link></li>
            <li><Link to={`${newUrl}promotionalProducts`} onClick={onClick(false)} style={isActive(`${newUrl}promotionalProducts`)}>Рекламная продукция</Link></li>
            <li><Link to={`${newUrl}videos`} onClick={onClick(false)} style={isActive(`${newUrl}videos`)}>Видео</Link></li>
        </ul>
    );
};
