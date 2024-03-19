import styles from "./Service.module.css"
import { Header } from "../../widgets/Header/Header"
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard"
import { Footer } from "../../widgets/Footer/Footer"
import { service } from "../../data"

export const Service = () => {
    return (
        <>
            <Header />

            <div className={styles.container}>
                {
                    service.map((item, index) => {
                        return (
                            < ServiceCard key={index} count={item.count} color={item.color} title={item.title} img={item.img} />
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}