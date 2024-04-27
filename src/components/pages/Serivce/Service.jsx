import styles from "./Service.module.css"
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard"
import { service } from "../../data"

export const Service = () => {
    return (
        <>
            <div className={styles.container}>
                {
                    service.map((item, index) => {
                        return (
                            < ServiceCard key={index} count={item.count} color={item.color} title={item.title}
                                img={item.img} />
                        )
                    })
                }
            </div>
        </>
    )
}