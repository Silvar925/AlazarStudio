import styles from "./Tag.module.css"

export const Tag = ({ name }) => {
    return (
        <div className={styles.tag}>
            {name}
        </div>
    )
}