import styles from "./Filter.module.css"

export const Filter = () => {
    return (
        <ul className={styles.buttonList}>
            <a href="#">Логотип</a>
            <a href="#">Web-дизайн</a>
            <a href="#">Мобильные приложения</a>
            <a href="#">Презентации</a>
            <a href="#">Рекламная продукция</a>
            <a href="#">Видео</a>

        </ul>
    )
}