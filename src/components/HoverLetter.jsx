import React from 'react'

export default function HoverLetter({ letter }) {
    return (
        <span className='text-[3em] font-extrabold text-secondary lg:text-[7em] hover:text-font'>
            {letter}
        </span>
    )
}
