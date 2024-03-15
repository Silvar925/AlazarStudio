import styles from "./Home.module.css"
import { Header } from "../../widgets/Header/Header"
import { Filter } from "../../sections/Filter/Filter"

export const Home = () => {
    return (
        <>
            <Header />

            <section className={styles.container}>
                <Filter />
            </section>

        </>
    )
}