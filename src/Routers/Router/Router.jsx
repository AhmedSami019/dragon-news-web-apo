import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Root from "../../Pages/Root/Root";
import About from "../../Pages/Root/About/About";
import Career from "../../Pages/Career/Career";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
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