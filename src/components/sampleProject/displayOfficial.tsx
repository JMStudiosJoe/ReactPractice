import * as style from 'ts-style'
import * as React from 'react'
import { Official } from '../types/voteSmartTypes'
import * as FA from 'react-icons/lib/fa'

const officialImageCSS = (photoURL: string) => {
    return style.create({
        backgroundImage: `url(${photoURL})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '200px',
        borderRadius: '16px'
    })
}
const NO_IMAGE_AVALABLE = '../src/images/no_image.jpeg'
const handleOfficialImage = (official: Official) => {
    var officialURL =  official.urls ? official.urls[0] : ''
    if (official.photoUrl) {
        return (
            <a target={'_blank'} href={officialURL}>
                <div style={officialImageCSS(official.photoUrl)}></div>
            </a>
        )
    }
    else {
        return (
            <a target={'_blank'} href={officialURL}>
                <div style={officialImageCSS(NO_IMAGE_AVALABLE)}>
                </div>
            </a>
        )
    }
    
}

const displayOfficial = (official: Official, index: number) => {
    const officialInfoContainer = () => {
        return style.create({
            width: '150px',
            display: 'inline-block',
            margin: '6px'
        })
    }
    const officialHeader = () => {
        return style.create({
            width: '150px',
            display: 'block',
            margin: '6px',
            fontSize: '14px',
            height: '40px'
        })
    }

    const officialName = () => {
        return style.create({
            fontSize: '14px'
        })
    }
    return(
        <div style={officialInfoContainer()} key={index}>
            <div style={officialHeader()}>
                <div>{official.name}</div>
                <div>{official.party}</div>
            </div>
            { handleOfficialImage(official) }
            
        </div>
    )
}

export {
    displayOfficial
}
