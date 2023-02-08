import React from 'react'

export default function NavbarLink({ linkName }) {
    return (
        <li className='cursor-pointer my-2 text-font transition-colors duration-300 transform hover:text-white md:mx-4 md:my-0'>
            {linkName}
        </li>
    )
}
