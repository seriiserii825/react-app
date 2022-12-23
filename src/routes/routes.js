import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../pages/error-page";
import ContactPage from "../pages/contact-page";
import HooksPage from "../pages/hooks-page";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/contacts",
                element: <ContactPage/>,
            },
            {
                path: "/hooks",
                element: <HooksPage/>,
            }
        ]
    },
]);

export default routes;