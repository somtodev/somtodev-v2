import React from 'react'

export default function ToolsCard({ tool }) {
    return (
        <div className="bg-alt-dark px-4 lg:px-6 py-6 lg:py-6 rounded-sm drop-shadow-sm select-none">
            <div className="h-auto flex justify-between items-center">
                <h3 className="text-sm text-primary opacity-{{opacity}}">{tool.toolName}</h3>
                <img className="w-[1.5em] object-cover" src={tool.icon} alt="icon" />
            </div>
        </div>
    )
}
