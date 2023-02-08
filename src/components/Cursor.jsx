import React from 'react'
import { useState } from 'react';

export default function Cursor() {
    const [currentClass, setCurrentClass] = useState('')

    function handleMouseMove(event) {
        let X_AXIS = event.clientX;
        let Y_AXIS = event.clientY;
    }

    function handleMouseDown() {
        setCurrentClass('cursorhover')
    }

    function handleMouseUp() {
        setCurrentClass('')
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`cursor ${currentClass}`}
            cursor >

        </div >
    )
}
