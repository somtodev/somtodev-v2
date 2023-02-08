import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { useRef } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'


import Home from './pages/Home';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

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

export default function App() {
    const containerRef = useRef(null)
    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth: true,
                    // ... all available Locomotive Scroll instance options 
                }
            }
            watch={
                []
            }
            containerRef={containerRef}
        >
            <RouterProvider router={router} data-scroll-container ref={containerRef} />
        </LocomotiveScrollProvider>
    )
}
