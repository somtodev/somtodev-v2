import React from 'react'

export default function ProjectCard({ project }) {
    const FinishedProject = project.status === "Completed"

    return (
        <div
            className="w-full flex flex-col gap-4 bg-alt-dark rounded-sm drop-shadow-xl select-none aspect-video px-5 py-6 lg:px-7 lg:py-6 transition-all">
            <h3 className="text-3xl text-primary">{project.name}</h3>
            <p className="text-xs lg:text-sm text-faded">{project.description}</p>
            <div
                className="h-auto flex items-center justify-between lg:justify-end lg:gap-5 text-xs px-2 lg:px-3 lg:py-1 mt-auto">
                {
                    FinishedProject ?
                        <>
                            <a href={project.github} target="_blank" rel="noreferrer noopener"
                                className="flex items-center gap-2 hover:text-primary hover:opacity-75">
                                <p>GitHub</p>
                            </a>
                            <a href={project.url} target="_blank" rel="noreferrer noopener"
                                className="flex items-center gap-1 hover:text-primary hover:opacity-75">
                                <p>Website</p>
                            </a>
                        </>
                        : <span className='text-faded'>{project.status}</span>
                }
            </div>
        </div>
    )
}
