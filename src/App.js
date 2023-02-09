import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";



import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/*",
            element: <NotFound />
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}
