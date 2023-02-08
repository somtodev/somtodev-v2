import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <main className='w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-5 mt-[15vh] lg:mt-[14vh] 2xl:mt-[14vh]' data-scroll-section>
            <div className="flex flex-col gap-y-4 lg:gap-y-8 lg:col-span-4">
                <div className="w-max flex items-center gap-2 text-faded hover:text-primary transition-all"><svg
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"></path>
                </svg>
                    <Link className='text-sm' to={'/'}>Back</Link>
                </div>
                <h1 className="text-6xl lg:text-7xl">404</h1>
                <h2 className="text-3xl lg:text-4xl">Page Not Found</h2>
                <p className="text-faded text-xs lg:text-sm">
                    Ops!, requested page not found.
                </p>
            </div>
        </main>
    )
}
