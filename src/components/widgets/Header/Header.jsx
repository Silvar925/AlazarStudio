import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/service">Услуги</Link></li>
                    <li><Link to="/aboutUS">О нас</Link></li>
                </ul>

                <img src="alazarStudio.png" alt="#" />

                <div className="mobileHeader">
                    <a href="#"><img src="menuBurger.svg" alt="#" className="dropbtn" /></a>
                    <div className="dropdown-content">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/shop">Услуги</Link></li>
                        <li><Link to="/aboutUS">О нас</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                        <li><Link to="/feedback">Обратная связь</Link></li>
                        <li><Link to="/shop">Магазин</Link></li>
                    </div>
                </div>


                <ul>
                    <li><Link to="/contacts">Контакты</Link></li>
                    <li><Link to="/feedback">Обратная связь</Link></li>
                    <li><Link to="/shop">Магазин</Link></li>
                </ul>

            </nav>
        </header>
    )
}