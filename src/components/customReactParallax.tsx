import * as React from 'react'
import * as style from 'ts-style'
import { imageData } from '../models/imageData'
import { attachments } from './scss/common'
let imageNameData = imageData.imageData

interface ParralaxImage {
    path: string
    active: boolean,
    image: string
}

let background = imageNameData[0].image


interface ParallaxComponentState {
    background: string
}

class ParallaxComponent extends React.Component<{}, ParallaxComponentState> {
    constructor() {
        super()
    }
    resetPathActivity() {
        for (let imageData of imageNameData) {
            imageData.active = false
        }
        this.getBackgroundPath()
    }
    getBackgroundPath() {
        for (const imageData of imageNameData) {
            if (!imageData.active) {
                imageData.active = true
                return imageData.image
            }
        }
        this.resetPathActivity()
    }

    getParallaxCSS() {
        return  style.create({
            marginTop: '10px',
            marginBottom: '10px',
            backgroundImage: `url(${background})`,
            height: '300px',
            minWidth: '700px',
            backgroundAttachment:'fixed' as attachments,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        });
    } 
    render() {
        return (
            <div style={this.getParallaxCSS()}>
            </div>
        )
    }
    componentWillUpdate() {
        background = this.getBackgroundPath()
    }
}

export default ParallaxComponent
