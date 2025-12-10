import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Root from "../../Pages/Root/Root";
import About from "../../Pages/Root/About/About";
import Career from "../../Pages/Career/Career";
import Home from "../../Components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
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