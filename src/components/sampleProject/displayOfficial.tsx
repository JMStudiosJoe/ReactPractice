import * as style from 'ts-style'
import * as React from 'react'
import { Official } from '../types/voteSmartTypes'


const officialImageCSS = () => {
    return style.create({
        height: '60px',
        width: '50px',
        boarder: '1px solid #AAA'
    })
}

const handleOfficialImage = (official: Official) => {
    if (official.photoUrl) {
        return (
            <div>
                <img style={officialImageCSS()} src={official.photoUrl} />
            </div>
        )
    }
    else {
        return official.urls.map( (url: string, index: number) => {
            return (
                <a key={index} target={'_blank'} href={url}>Info Page</a>
            )
        })
    }
    
}

const displayOfficial = (official: Official, index: number) => {
    const officialInfoContainer = () => {
        return style.create({
            width: '160px',
            display: 'inline-block',
            margin: '6px'
        })
    }
    return(
        <div style={officialInfoContainer()} key={index}>
            <div>
                <div>{official.name}</div>
                <div>{official.party}</div>
                { handleOfficialImage(official) }
            </div>
        </div>
    )
}

export {
    displayOfficial
}
