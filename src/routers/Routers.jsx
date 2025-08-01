import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OuerShop/OurShop";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/our-menu",
                element: <OurMenu />,
            },
            {
                path: "/our-shop",
                element: <OurShop />,
            },
            {
                path: '/category/:categoryName',
                element: <OurShop />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            }
        ]
    },
]);