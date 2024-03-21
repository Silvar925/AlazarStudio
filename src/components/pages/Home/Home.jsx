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

                    <div className={styles.rowBox}>
                        <div className={styles.row}>
                            <img src="home/img21.png" alt="#" />
                            <img src="home/img22.png" alt="#" />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.row2Col}>
                                <img src="home/img23.png" alt="#" />
                                <img src="home/img24.png" alt="#" />
                            </div>

                            <img src="home/img25.png" alt="#" />
                        </div>
                    </div>

                    <div className={styles.rowBox}>
                        <div className={styles.row}>
                            <img src="home/img26.png" alt="#" />
                            <img src="home/img27.png" alt="#" />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.row2Col}>
                                <img src="home/img28.png" alt="#" />
                                <img src="home/img29.png" alt="#" />
                            </div>

                            <img src="home/img30.png" alt="#" />
                        </div>
                    </div>

                    <div className={styles.rowBox}>
                        <div className={styles.row}>
                            <img src="home/img31.png" alt="#" />
                            <img src="home/img32.png" alt="#" />
                        </div>

                        <div className={styles.row2}>
                            <div className={styles.row2Col}>
                                <img src="home/img33.png" alt="#" />
                                <img src="home/img34.png" alt="#" />
                            </div>

                            <img src="home/img35.png" alt="#" />
                        </div>
                    </div>

                </div>

            </section>

            <Footer />

        </>
    )
}