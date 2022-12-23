import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "./root";
import ErrorPage from "../pages/error-page";
import ContactPage from "../pages/contact-page";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/contacts",
                element: <ContactPage/>,
            }
        ]
    },
]);

export default routes;