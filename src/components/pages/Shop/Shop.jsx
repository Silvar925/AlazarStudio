import styles from "./Shop.module.css"
import { Filter } from "../../sections/Filter/Filter"
import { Card } from "../../widgets/Card/Card"
import { BaseButton } from "../../widgets/BaseButton/BaseButton"
import { shop } from "../../data"
import { useLocation } from "react-router-dom";

export const Shop = () => {
    const location = useLocation().pathname;

    return (
        <>
            <div className={styles.container}>
                <Filter url={location} />

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
        </>
    )
}