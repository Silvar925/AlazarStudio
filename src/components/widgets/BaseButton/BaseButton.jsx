import styles from "./BaseButton.module.css"

export const BaseButton = ({ text }) => {
    return (
        <a href="#" className={styles.button}>{text}</a>
    )
}