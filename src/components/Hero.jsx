import React from 'react'

import HoverLetter from './HoverLetter'

export default function Hero() {
    const mailLink = 'mailto:leroynnalue65@gmail.com?subject=Hello%20Somtochukwu&body=Hi%20Somtochukwu%2C%0A%0AI%20am%20...'

    const wordClass = ''

    return (
        <section className='w-full my-40 flex flex-col-reverse justify-between items-start md:flex-row md:my-44'>
            <section className='w-full flex flex-col md:max-w-[45%]'>
                {/* Software Developer */}
                <section className='border-b-4 border-b-secondary'>
                    <h1 className={wordClass}>
                        <HoverLetter letter={'S'} />
                        <HoverLetter letter={'O'} />
                        <HoverLetter letter={'F'} />
                        <HoverLetter letter={'T'} />
                        <HoverLetter letter={'W'} />
                        <HoverLetter letter={'A'} />
                        <HoverLetter letter={'R'} />
                        <HoverLetter letter={'E'} />
                    </h1>
                    <h1 className={wordClass}>
                        <HoverLetter letter={'D'} />
                        <HoverLetter letter={'E'} />
                        <HoverLetter letter={'V'} />
                        <HoverLetter letter={'E'} />
                        <HoverLetter letter={'L'} />
                        <HoverLetter letter={'O'} />
                        <HoverLetter letter={'P'} />
                        <HoverLetter letter={'E'} />
                        <HoverLetter letter={'R'} />
                    </h1>
                </section>
                {/* Quote */}
                <p class="max-w-md py-4 text-faded text-md normal-case">
                    Whatever we humans conceive in our minds can be achieved! but for me I Need The <span
                        class="font-bold">
                        Holy Spirit
                    </span>
                    To
                    lead me towards the right path.
                </p>
                {/* Say Hi */}
                <a rel="noreferrer" target="_blank" href={mailLink} className='flex'>
                    <span class="pr-4 text-[1em] text-secondary">Say Hi</span>
                    <div class="w-1/6 transition-all duration-300 ease-in-out bg-secondary py-[.24em] hover:w-5/6"></div>
                    <span class="text-[1em]">👋</span>
                </a>
            </section>

            <img
                className='w-full md:max-w-[30%]'
                src="/images/me.png"
                alt="My Avatar"
            />
        </section>
    )
}