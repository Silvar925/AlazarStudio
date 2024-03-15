import styles from "./Shop.module.css"
import { Header } from "../../widgets/Header/Header"
import { Filter } from "../../sections/Filter/Filter"
import { Card } from "../../widgets/Card/Card"
import { BaseButton } from "../../widgets/BaseButton/BaseButton"
import { shop } from "../../data"
import { Footer } from "../../widgets/Footer/Footer"

export const Shop = () => {
    return (
        <>
            <Header />

            <div className={styles.container}>
                <Filter />

                <div className={styles.cardList}>

                    {
                        shop.map((item, index) => {
                            return (
                                <Card key={index} width="756px" height="400px" img={item.img} textTitle={item.title}>
                                    {
                                        item.button.map((item, index) => {
                                            return (
                                                <BaseButton key={index} text={item} />
                                            )
                                        })
                                    }
                                </Card>
                            )
                        })
                    }
                </div>

            </div>

            {/* <Footer /> */}
        </>
    )
}