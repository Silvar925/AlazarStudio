import styles from './ShopList.module.css';
import { shop } from "../../data.js";
import { Card } from "../../widgets/Card/Card.jsx";
import { Tag } from "../../shared/Tag/Tag"
import { useLocation } from "react-router-dom";
import { filterArrayM, reversTypeProject } from "../../helpers";

export const ShopList = () => {
    const location = useLocation().pathname;
    let filteredArray = filterArrayM(shop, location, 'shop');
    console.log(location)

    if (location === '/shop') {
        return (
            <div className={styles.cardList}>
                {
                    shop.map((item, index) => {
                        return (
                            <Card key={index} to={`../listProject/${reversTypeProject[item.type]}/${item.id}`} width="756px" height="400px" img={item.img} textTitle={item.title}>
                                {
                                    item.button.map((item, index) => {
                                        return (
                                            <Tag key={index} name={item} />
                                        )
                                    })
                                }
                            </Card>
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div className={styles.cardList}>
                {
                    filteredArray.map((item, index) => {
                        return (
                            <Card key={index} to={`../listProject/${reversTypeProject[item.type]}/${item.id}`} width="756px" height="400px" img={item.img} textTitle={item.title}>
                                {
                                    item.button.map((item, index) => {
                                        return (
                                            <Tag key={index} name={item} />
                                        )
                                    })
                                }
                            </Card>
                        )
                    })
                }
            </div>
        )
    }

}