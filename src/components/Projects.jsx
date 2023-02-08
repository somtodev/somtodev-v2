import React from 'react'
import ProjectData from '../data/projects.json'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mt-6">
            {
                ProjectData.map((project) => {
                    return <ProjectCard key={project.name} project={project} />
                })
            }
        </div>
    )
}
