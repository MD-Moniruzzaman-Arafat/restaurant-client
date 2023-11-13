import { createBrowserRouter } from "react-router-dom";
import App from "../root/App";
import Home from "../page/Home/Home";
import ContactUs from "../page/ContactUs/ContactUs";
import Dashboard from "../page/Dashboard/Dashboard";
import OurMenu from "../page/OurMenu/OurMenu";
import OurShop from "../page/OurShop/OurShop";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "contact-us",
                element: <ContactUs></ContactUs>
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>
            },
            {
                path: "our-menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "our-shop",
                element: <OurShop></OurShop>
            }

        ]
    },
]);

export default router;