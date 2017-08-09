import * as React from 'react'
import * as style from 'ts-style'
import { imageData } from '../models/imageData'
let imageNameData = imageData.imageData
type attachments = 'fixed'| 'initial'| 'inherit'| 'unset'| 'scroll'| 'local'

interface ParralaxImage {
    path: string
    active: boolean
}

let background = imageNameData[0].path


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
                return imageData.path
            }
        }
        this.resetPathActivity()
    }

    getParallaxCSS() {
        return  style.create({
            marginTop: '10px',
            marginBottom: '10px',
            backgroundImage: `url(${background})`,
            height: '500px',
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
