import styles from "./Home.module.css"
import { Header } from "../../widgets/Header/Header"
import { Filter } from "../../sections/Filter/Filter"
import { Footer } from "../../widgets/Footer/Footer"

export const Home = () => {
    return (
        <>
            <Header />

            <section className={styles.container}>
                <Filter />

                <div className={styles.gallery}>

                    <div className={styles.rowBox}>
                        <div className={styles.row}>
                            <img src="home/img1.png" alt="#" />
                            <img src="home/img2.png" alt="#" />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.row2Col}>
                                <img src="home/img3.png" alt="#" />
                                <img src="home/img4.png" alt="#" />
                            </div>

                            <img src="home/img5.png" alt="#" />
                        </div>
                    </div>

                    <div className={styles.rowBox}>
                        <div className={styles.row}>
                            <img src="home/img6.png" alt="#" />
                            <img src="home/img7.png" alt="#" />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.row2Col}>
                                <img src="home/img8.png" alt="#" />
                                <img src="home/img9.png" alt="#" />
                            </div>

                            <img src="home/img10.png" alt="#" />
                        </div>
                    </div>

                    <div className={styles.rowBox}>
                        <div className={styles.row}>
                            <img src="home/img11.png" alt="#" />
                            <img src="home/img12.png" alt="#" />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.row2Col}>
                                <img src="home/img13.png" alt="#" />
                                <img src="home/img14.png" alt="#" />
                            </div>

                            <img src="home/img15.png" alt="#" />
                        </div>
                    </div>

                    <div className={styles.rowBox}>
                        <div className={styles.row}>
                            <img src="home/img16.png" alt="#" />
                            <img src="home/img17.png" alt="#" />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.row2Col}>
                                <img src="home/img18.png" alt="#" />
                                <img src="home/img19.png" alt="#" />
                            </div>

                            <img src="home/img20.png" alt="#" />
                        </div>
                    </div>

                </div>

            </section>

            <Footer />

        </>
    )
}