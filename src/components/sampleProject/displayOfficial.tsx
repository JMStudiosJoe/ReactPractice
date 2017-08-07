import * as style from 'ts-style'
import * as React from 'react'
import { Official } from '../types/voteSmartTypes'


const displayOfficial = (official: Official, index: number) => {
    const officialImageCSS = () => {
        return style.create({
            height: '60px',
            width: '50px' 
        })
    }
    const officialInfoContainer = () => {
        return style.create({
            height: '200px',
            width: '150px'
        })
    }
    return(
        <div style={officialInfoContainer()} key={index}>
            <div>
                <div>{official.name}</div>
                <div>{official.party}</div>
            </div>
        </div>
    )
}

export {
    displayOfficial
}
