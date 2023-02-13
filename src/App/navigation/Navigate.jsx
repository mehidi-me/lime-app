import React, { useLayoutEffect } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    useLocation,
} from "react-router-dom";
import Dashboard from '../pages/dashboard/Dashboard';
import Dashboard1 from '../pages/dashboard/Dashboard1';
import Dashboard2 from '../pages/dashboard/Dashboard2';
import Failed from '../pages/Failed';
import FinalTouch from '../pages/FinalTouch';
import GoToDashboard from '../pages/GoToDashboard';
import Home from '../pages/Home';
import Opps from '../pages/Opps';
import Packages from '../pages/Packages';
import Payment from '../pages/Payment';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Verified from '../pages/Verified';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "failed",
        element: <Failed />,
    },
    {
        path: "final-touch",
        element: <FinalTouch />,
    },
    {
        path: "go-to-dashboard",
        element: <GoToDashboard />,
    },
    {
        path: "opps",
        element: <Opps />,
    },
    {
        path: "packages",
        element: <Packages />,
    },
    {
        path: "payment",
        element: <Payment />,
    },
    {
        path: "signin",
        element: <Signin />,
    },
    {
        path: "signup",
        element: <Signup />,
    },
    {
        path: "verified",
        element: <Verified />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "dashboard1",
        element: <Dashboard1 />,
    },
    {
        path: "dashboard2",
        element: <Dashboard2 />,
    }
],
    { basename: "/lime-app" }
);



function Navigate() {
    return (


        <RouterProvider router={router} />


    )
}

export default Navigate