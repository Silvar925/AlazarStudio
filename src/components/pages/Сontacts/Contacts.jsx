import styles from "./Contacts.module.css"
import { Header } from "../../widgets/Header/Header"
import { Footer } from "../../widgets/Footer/Footer"

export const Contacts = () => {
    return (
        <>
            <Header />

            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>КОНТАКТЫ</h2>
                </div>

                <div className={styles.list}>
                    <div className={styles.card}>
                        <img src="contacts/GPS.png" alt="GPS" />
                        <p>Aalborgring 4, 24109 Kie</p>
                    </div>

                    <div className={styles.card}>
                        <img src="contacts/phone.png" alt="PHONE" />
                        <p>+79283995384</p>
                    </div>

                    <div className={styles.card}>
                        <img src="contacts/email.png" alt="EMAIL" />
                        <p>Aalborgring 4, 24109 Kie</p>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}