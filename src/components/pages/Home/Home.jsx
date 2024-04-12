import styles from "./Home.module.css"
import { Header } from "../../widgets/Header/Header"
import { Filter } from "../../sections/Filter/Filter"
import { Footer } from "../../widgets/Footer/Footer"
import { gallery } from "../../data"

export const Home = () => {

    return (
        <>
            <Header />

            <section className={styles.container}>
                <Filter />

                <div className={styles.gallery}>
                    {
                        gallery.map((item, index) => {
                            return (
                                row()
                            )
                        })
                    }
                </div>


            </section>

            <Footer />
        </>
    )
}


const row = () => {
    return (
        <div style={{
            display: 'flex', gap: '20px'
        }}>
            temp text
        </div>
    )
}

const rowMirrored = () => {
    return (
        <div style={{
            display: 'flex', gap: '20px'
        }}>

        </div>
    )
}