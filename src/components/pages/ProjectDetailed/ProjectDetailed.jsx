import { useParams } from "react-router-dom"
import { gallery, shop } from "../../data"
import styles from "./ProjectDetailed.module.css"
import { typeProject } from "../../helpers"



export const ProjectDetailed = () => {
    const projectID = useParams().projectID
    const type = useParams().type

    let filteredArray = getItemsGallery(gallery, type, projectID)

    return (
        <div className={styles.container}>{
            filteredArray.map((item, index) => {
                console.log(item)

                return (
                    <img key={index} src={item} alt="#" />
                )
            })
        }</div>
    )
}

const getItemsGallery = (gallery, type, id) => {
    let array = [];

    for (let key in gallery) {
        if (gallery[key].type === typeProject[type] && gallery[key].id === id) {
            return gallery[key].screens
        }
    }


    return array;
}