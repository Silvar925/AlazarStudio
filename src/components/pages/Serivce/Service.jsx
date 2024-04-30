import styles from "./Service.module.css"
import { ServiceCard } from "../../widgets/ServiceCard/ServiceCard"
import { service } from "../../data"
import { serviceCard } from "../../helpers"

export const Service = () => {

    return (
        <>
            <div className={styles.container}>
                {
                    service.map((item, index) => {
                        console.log(item.title)
                        return (
                            < ServiceCard key={index} to={serviceCard[item.title]} count={item.count} color={item.color} title={item.title}
                                img={item.img} />
                        )
                    })
                }
            </div>
        </>
    )
}