import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home.jsx/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Activities from "../Pages/Activities/Activities";
import Organization from "../Pages/Organization/Organization";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/activities',
                element: <Activities />
            },
            {
                path: '/organization',
                element: <Organization />
            },
        ]
    },
]);