import styles from "./Home.module.css"
import { Filter } from "../../sections/Filter/Filter"
import { Outlet } from "react-router-dom";
import { Gallery } from "../../widgets/Gallery/Gallery";
import { useState } from "react";

export const Home = () => {
    const [pressedFilter, isPressedFitler] = useState(false)

    return (<>
        <section className={styles.container}>
            <Filter url="/" onClick={() => isPressedFitler} />
            {pressedFilter === false && <Gallery />}
            <Outlet />

        </section>
    </>)
}