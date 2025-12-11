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
                Component: CategoryNews,
                loader: ()=> fetch("/news.json")
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
    },
    {
        path: "/*",
        element: <h2 className="text-2xl font-semibold text-center mt-20">404 error</h2>
    }
    
])

export default router