import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Shop } from "./pages/Shop/Shop";
import { Service } from "./pages/Serivce/Service";
import { AboutUS } from "./pages/AboutUs/AboutUS";
import { Contacts } from "./pages/Сontacts/Contacts";
import { Feedback } from "./pages/Feedback/Feedback"
import { Layout } from "./Layout";
import { Gallery } from "./pages/Home/Gallery";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                
                <Route path="/" element={<Home />} >
                    <Route path="/:filter" element={<Gallery />} />
                </Route>


                <Route path="shop" element={<Shop />} />
                <Route path="service" element={<Service />} />
                <Route path="aboutUS" element={<AboutUS />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="feedback" element={<Feedback />} />
            </Route>
        </Routes>
    </BrowserRouter>
}