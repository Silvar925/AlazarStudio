import styles from "./Home.module.css"
import { Filter } from "../../sections/Filter/Filter"
import { useState } from "react";
import { Gallery } from "./Gallery.jsx";
import { Outlet, useLocation, useParams } from "react-router-dom";

export const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation().pathname

    return (<>
        <section className={styles.container}>
            <Filter />

            <div className={styles.gridContainer}>
                <div className={`${styles.item} ${styles.big}`}>1</div>
                <div className={styles.item}>2</div>
                <div className={styles.item}>3</div>
                <div className={styles.item}>4</div>
                <div className={`${styles.item} ${styles.big}`}>5</div>
                <div className={styles.item}>6</div>
            </div>


            <Outlet />

        </section>
    </>)
}
