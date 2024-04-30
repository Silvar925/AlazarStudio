import styles from "./Gallery.module.css"
import { gallery } from "../../data"
import { useLocation } from "react-router-dom"
import { CardGallery } from "../../shared/CardGallery/CardGallery"
import { filterArray } from "../../helpers"
import { useState } from "react"
import { reversTypeProject } from "../../helpers"


export const Gallery = () => {
    let array = []
    const urlFilter = useLocation().pathname
    const [infoCard, setInfoCard] = useState(null)

    let filteredArray = filterArray(gallery, urlFilter)
    const countOfImagesInBlock = 5;


    const clickCardHandler = (info, type) => {
        console.log('info: ', info)
        console.log('info: ', type)
    }

    if (urlFilter === '/') {
        for (let i = 0; i < gallery.length - (countOfImagesInBlock - 1); i = i + countOfImagesInBlock) {
            array.push(<div key={i} className={styles.block}>
                <div className={styles.row}>
                    <CardGallery to={`listProject/${reversTypeProject[gallery[i].type]}/${gallery[i].id}`} className={styles.card1} img={gallery[i].img}
                        tags={gallery[i].tags} name={gallery[i].name} onClick={() => clickCardHandler(gallery[i].screens, gallery[i].type)} />
                    <CardGallery to={`listProject/${reversTypeProject[gallery[i + 1].type]}/${gallery[i + 1].id}`} className={`${styles.columnItem} ${styles.card2}`}
                        img={gallery[i + 1].img} tags={gallery[i + 1].tags} name={gallery[i + 1].name} onClick={() => clickCardHandler(gallery[i + 1].screens)} />
                </div>

                <div className={styles.row}>
                    <div className={styles.rowColumn}>
                        <CardGallery to={`listProject/${reversTypeProject[gallery[i + 2].type]}/${gallery[i + 2].id}`} className={styles.columnItem} img={gallery[i + 2].img}
                            tags={gallery[i + 2].tags} name={gallery[i + 2].name} onClick={() => clickCardHandler(gallery[i + 2].screens)} />
                        <CardGallery to={`listProject/${reversTypeProject[gallery[i].type]}/${gallery[i + 3].id}`} className={styles.columnItem} img={gallery[i + 3].img}
                            tags={gallery[i + 3].tags} name={gallery[i + 3].name} onClick={() => clickCardHandler(gallery[i + 3].screens)} />
                    </div>

                    <CardGallery to={`listProject/${reversTypeProject[gallery[i + 4].type]}/${gallery[i + 4].id}`} img={gallery[i + 4].img} className={styles.card1} tags={gallery[i + 4].tags}
                        name={gallery[i + 4].name} onClick={() => clickCardHandler(gallery[i + 4].screens)} />
                </div>
            </div>)
        }
    } else {
        for (let i = 0; i < filteredArray.length - 4; i = i + 5) {
            array.push(<div key={i + 1} className={styles.block}>
                <div className={styles.row}>
                    <CardGallery to={`listProject/${reversTypeProject[filteredArray[i].type]}/${filteredArray[i].id}`} className={styles.card1} img={filteredArray[i].img} tags={gallery[i].tags}
                        name={filteredArray[i].name} onClick={() => clickCardHandler(filteredArray[i].screens)} />
                    <CardGallery to={`listProject/${reversTypeProject[filteredArray[i].type]}/${filteredArray[i + 1].id}`} className={`${styles.columnItem} ${styles.card2}`} img={filteredArray[i + 1].img}
                        tags={gallery[i + 1].tags} name={filteredArray[i + 1].name} onClick={() => clickCardHandler(filteredArray[i].screens)} />
                </div>

                <div className={styles.row}>
                    <div className={styles.rowColumn}>
                        <CardGallery to={`listProject/${reversTypeProject[filteredArray[i + 2].type]}/${filteredArray[i].id}`} className={styles.columnItem} img={filteredArray[i + 2].img} tags={gallery[i + 2].tags}
                            name={filteredArray[i + 2].name} onClick={() => clickCardHandler(filteredArray[i].screens)} />
                        <CardGallery to={`listProject/${reversTypeProject[filteredArray[i + 3].type]}/${filteredArray[i].id}`} className={styles.columnItem} img={filteredArray[i + 3].img} tags={gallery[i].tags}
                            name={filteredArray[i + 3].name} onClick={() => clickCardHandler(filteredArray[i + 3].screens)} />
                    </div>

                    <CardGallery to={`listProject/${reversTypeProject[filteredArray[i + 4].type]}/${gallery[i + 4].id}`} img={filteredArray[i + 4].img} tags={gallery[i + 4].tags} name={gallery[i + 4].name} onClick={() => clickCardHandler(gallery[i].screens)} />
                </div>
            </div>);
        }
    }
    return array
}
