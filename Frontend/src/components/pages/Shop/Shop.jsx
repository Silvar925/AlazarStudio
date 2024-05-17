import styles from "./Shop.module.css"
import { Filter } from "../../sections/Filter/Filter"
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { ShopList } from "../ShopList/ShopList.jsx";

export const Shop = () => {
    const [pressedFilter, isPressedFitler] = useState(false)

    return (
        <>
            <div className={styles.container}>
                <Filter url="shop/" onClick={() => isPressedFitler} />
                {pressedFilter === false && <ShopList />}
                <Outlet />
            </div>
        </>
    )
}