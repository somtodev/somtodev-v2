import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'

import NavbarLink from './NavbarLink'

export default function Navbar() {

    const [isOpen, setOpen] = useState(false)
    const currentClass = isOpen ? 'translate-x-0 translate-y-[100%] opacity-100 ' : 'opacity-0 -translate-x-full'

    function handleOpen() {
        setOpen(!isOpen)
    }

    return (
        <nav className='fixed top-6 w-5/6 flex justify-between items-center py-6 px-8 bg-bg-color bg-opacity-80 backdrop-blur-md drop-shadow-md-lg rounded-sm z-[99]'>

            <div className='w-full flex items-center justify-between'>
                <h1 className='font-[500] text-xl text-space'>Somtochukwu</h1>

                <div className='flex md:hidden'>
                    <button
                        onClick={handleOpen}
                        type='button'
                        className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 z-50' aria-label='toggle menu'>

                        {
                            !isOpen ? <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M4 8h16M4 16h16' />
                            </svg>
                                : ''
                        }

                        {
                            isOpen ? <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                                : ''
                        }
                    </button>
                </div>

            </div>

            <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-bg-color ${currentClass} md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}>
                <ul className='flex flex-col md:flex-row md:mx-6 md:gap-4'>
                    <NavbarLink linkName={'Home'} />
                    <NavbarLink linkName={'About'} />
                    <NavbarLink linkName={'Tools'} />
                    <NavbarLink linkName={'Projects'} />
                    <Link to={'/blog'}>
                        <NavbarLink linkName={'Blog'} />
                    </Link>
                </ul>
            </div>
        </nav >
    )
}
