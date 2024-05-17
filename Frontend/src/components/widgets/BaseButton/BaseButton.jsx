import styles from "./BaseButton.module.css"

export const BaseButton = ({text}) => {
    return (
        <div style={{cursor: 'pointer'}} className={styles.button}>{text}</div>
    )
}