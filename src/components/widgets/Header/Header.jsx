import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

export const Header = () => {
    const [dark, setDark] = useState(localStorage.getItem('theme') === 'dark');
    const [logo, setLogo] = useState(dark ? 'alazarStudioWhite.png' : 'alazarStudio.png')
    const [burger, setBurger] = useState(dark ? 'menuBurgerWhite.svg' : 'menuBurger.svg')

    useEffect(() => {
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        dark ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    }, [dark])

    const toggleTheme = () => {
        setDark(!dark);
        setLogo(dark ? 'alazarStudio.png' : 'alazarStudioWhite.png');
        setBurger(dark ? 'menuBurger.svg' : 'menuBurgerWhite.svg');
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/service">Услуги</Link></li>
                    <li><Link to="/aboutUS">О нас</Link></li>
                </ul>

                <Link to="/"><img src={logo} alt="alazarStudioLogo" /></Link>

                <div className="mobileHeader">
                    <a href="#"><img src={burger} alt="#" className="dropbtn" /></a>
                    <div className="dropdown-content">
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/service">Услуги</Link></li>
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

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className="btnTheme" onClick={toggleTheme}>
                    {dark ? 'Dark' : 'Light'}
                </button>
            </div>
        </header>
    );
};