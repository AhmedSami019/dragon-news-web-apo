import { createBrowserRouter } from "react-router";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import About from "../../Pages/Root/About/About";
import Career from "../../Pages/Career/Career";
import Home from "../../Components/Home/Home";
import CategoryNews from "../../Pages/CategoryNews/CategoryNews";
import AuthLayout from "../../Components/AuthLayout/AuthLayout";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import NewsDetails from "../../Pages/NewsDetails/NewsDetails";
import PrivateRoute from "../../Providers/PrivateRoute/PrivateRoute";

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
        path: "auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            }
        ]
    },
    {
        path: "news-details/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ()=> fetch("/news.json")
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