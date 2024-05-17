import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Header.css"

export const Header = () => {
    const location = useLocation().pathname
    const [dark, setDark] = useState(localStorage.getItem('theme') === 'dark');
    const [logo, setLogo] = useState(dark ? 'alazarStudioWhite.svg' : 'alazarStudio.svg')
    const [burger, setBurger] = useState(dark ? 'menuBurgerWhite.svg' : 'menuBurger.svg')

    useEffect(() => {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        dark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    }, [dark])

    const toggleTheme = () => {
        setDark(!dark);
        setLogo(dark ? 'alazarStudio.svg' : 'alazarStudioWhite.svg');
        setBurger(dark ? 'menuBurger.svg' : 'menuBurgerWhite.svg');
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Главная</NavLink></li>
                    <li><NavLink to="/service">Услуги</NavLink>
                    </li>
                    <li><NavLink to="/aboutUS">О нас</NavLink></li>
                </ul>

                <div style={{ cursor: 'pointer' }}><img src={logo} alt="alazarStudioLogo" onClick={toggleTheme} /></div>

                <div className="mobileHeader">
                    <a href="#"><img src={burger} alt="#" className="dropbtn" /></a>
                    <div className="dropdown-content">
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/service">Услуги</NavLink></li>
                        <li><NavLink to="/aboutUS">О нас</NavLink></li>
                        <li><NavLink to="/contacts">Контакты</NavLink></li>
                        <li><NavLink to="/feedback">Обратная связь</NavLink></li>
                        <li><NavLink to="/shop">Магазин</NavLink></li>
                    </div>
                </div>

                <ul>
                    <li><NavLink to="/contacts">Контакты</NavLink>
                    </li>
                    <li><NavLink to="/feedback">Обратная
                        связь</NavLink></li>
                    <li><NavLink to="/shop">Магазин</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};