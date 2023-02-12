import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Failed from '../pages/Failed';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "failed",
        element: <Failed />,
    },
],
    { basename: "/lime-app" }
);

function Navigate() {
    return (
        <RouterProvider router={router} />
    )
}

export default Navigate