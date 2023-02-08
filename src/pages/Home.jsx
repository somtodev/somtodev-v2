import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import SectionArticle from '../components/SectionArticle'
import Tools from '../components/Tools'
import Projects from '../components/Projects'
import Attribution from '../components/Attribution'

export default function Home() {
    return (
        <main className='w-5/6 mx-auto' data-scroll-section>
            <Navbar />
            <Hero />

            {/* About */}
            <SectionHeader title={'About'} />
            <SectionArticle writeup={`Hello, I'm Somtochukwu, a sixteen-year-old Software Engineering student at Aptech, currently on Mars. For the most part, I'm a guided-self-taught software developer. Ever since I discovered the concept of programming in secondary school, I tend to find myself drawn to tech and the idea of building the next big thing.I'm a front-end developer who looks forward to becoming a full-stack developer. I dive into wherever my passion blooms. Who knows, I might be the next best neurosurgeon. When I'm not hitting my keyboard for a better world, I'm probably watching a Turkish Series, Reading A Book, Playing Video Games or Sleeping.`} />

            {/* Recent Playlist */}
            <section className="py-[1em]">
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="py-4">
                        <h1 className="text-4xl text-secondary">Recent Playlist</h1>
                    </div>

                    {/* Spotify API */}
                    <iframe
                        className='rounded-md my-[1em]'
                        src="https://open.spotify.com/embed/playlist/0ze0pc4vyU3ViZtQMLBxaj?utm_source=generator" width="100%"
                        height="380" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                </div>
            </section>

            {/* Tools */}
            <SectionHeader title={'Tools'} />
            <SectionArticle writeup={'I am a software engineering student with over a year of experience, creating projects that could enhance my problem solving skill and also increase my value as a software developer to my future clients.'} />
            <Tools />

            {/* Tools */}
            <SectionHeader title={'Projects'} />
            <SectionArticle writeup={'I am a software engineering student with over a year of experience, creating projects that could enhance my problem solving skill and also increase my value as a software developer to my future clients.'} />
            <Projects />

            {/* Attribution */}
            <Attribution />
        </main>
    )
}
