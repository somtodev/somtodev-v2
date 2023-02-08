import React from 'react'
import ToolData from '../data/tools.json'
import ToolsCard from './ToolsCard'

export default function Tools() {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5 lg:grid-cols-4 my-5">
            {
                ToolData.map((tool) => {
                    return <ToolsCard tool={tool} />
                })
            }
        </div>
    )
}
