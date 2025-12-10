import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import About from "../../Pages/Root/About/About";
import Career from "../../Pages/Career/Career";
import Home from "../../Components/Home/Home";
import CategoryNews from "../../Pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "category/:id",
                Component: CategoryNews
            }
        ]
    },
    {
        path: "about",
        Component: About
    },
    {
        path: "career",
        Component: Career
    }
])

export default router