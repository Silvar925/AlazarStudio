import {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
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
                    <li><Link to="/" className={location === "/" ? 'active' : undefined}>Главная</Link></li>
                    <li><Link to="/service" className={location === "/service" ? 'active' : undefined}>Услуги</Link>
                    </li>
                    <li><Link to="/aboutUS" className={location === "/aboutUS" ? 'active' : undefined}>О нас</Link></li>
                </ul>

                <Link to="/"><img src={logo} alt="alazarStudioLogo"/></Link>

                <div className="mobileHeader">
                    <a href="#"><img src={burger} alt="#" className="dropbtn"/></a>
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
                    <li><Link to="/contacts" className={location === "/contacts" ? 'active' : undefined}>Контакты</Link>
                    </li>
                    <li><Link to="/feedback" className={location === "/feedback" ? 'active' : undefined}>Обратная
                        связь</Link></li>
                    <li><Link to="/shop" className={location === "/shop" ? 'active' : undefined}>Магазин</Link></li>
                </ul>
            </nav>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <button className="btnTheme" onClick={toggleTheme}>
                    {dark ? 'Dark' : 'Light'}
                </button>
            </div>
        </header>
    );
};