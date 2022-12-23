import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/my.scss';
import routes from "./routes/routes";

import {
    RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>
);
