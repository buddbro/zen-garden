import React from 'react'
import Pixel from './Pixel'

class Playground extends React.Component {
    constructor() {
        super()
        this.state = {height: 500, width: 1000}
    }

    getId = () => Math.random(500000)

    generateRows(rows) {
        let temporary = []
        for(let i = 0; i < rows; i++) {
            temporary.push({id: this.getId})
        }

        return(
            temporary.map((row) => {
                return(
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {this.generatePixels(80)}
                    </div>
                )
            })
        )
    }

    generatePixels(pixels) {
        let temporary = []
        for(let i = 0; i < pixels; i++) {
                temporary.push({id: this.getId})
        }
        return(
            temporary.map((pixel, index) => <Pixel key={pixel.id} />)
        )
    }
    
    render() {
        return(
            <div style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <h1>Zen garden</h1>
                <div style={{display: 'flex', flexDirection: 'column', maxWidth: '60%'}}>
                    {this.generateRows(50)}
                </div>
            </div>
        )
    }
}

export default Playground