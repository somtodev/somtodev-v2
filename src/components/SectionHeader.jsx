import React from 'react'

export default function SectionHeader({ title }) {
    return (
        <div className="border-4 border-x-0 border-t-0 border-b-secondary py-4" id={title.toLowerCase()}>
            <h1 className="text-4xl text-secondary">{title}</h1>
        </div>
    )
}
