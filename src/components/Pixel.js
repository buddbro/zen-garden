import React, { useState } from 'react'
import randomColor from 'randomcolor'

const GenerateColor = (color) => {
    let value = color
    color === '#000' ? value = randomColor({luminosity: 'dark'}) : value = '#000'
    return value
}

const Pixel = (id) => {
    const [ color, setColor ] = useState(`#000`)

    const hoverOff = () => {
        color === '#000' ? setColor(GenerateColor(color)) : setColor(GenerateColor(color))
    }
    return (
        <div 
            style={{padding: '5px', backgroundColor: color}}
            onMouseLeave={hoverOff}
        />
    )
}

export default Pixel