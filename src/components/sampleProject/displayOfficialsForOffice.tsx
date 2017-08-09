import * as React from 'react'
import * as style from 'ts-style'

import { Official, Office } from '../types/voteSmartTypes'
import { displayOfficial } from './displayOfficial'


const getOfficialsForOffice = (office: Office, officials: Array<Official>): Array<Official> => {
    const indicies: Array<number> = office.officialIndices
    const officialsForOffice = indicies.map( (index: number) => {
        return officials[index]
    })
    return officialsForOffice
}
const displayOfficialsForOffice = (office: Office, index: number, officials: Array<Official>) => {
    const officeContainer = () => {
        return style.create({
            height: '220px',
            display: 'inline-block'
        })
    }

    const officialsForOffice: Array<Official> = getOfficialsForOffice(office, officials) 
    return officialsForOffice.map( (official: Official, index: number) => {
        return (
            <div style={officeContainer()}>
                <h4>{office.name}</h4>
                {displayOfficial(official, index)}
            </div>

        )
    })
}
export {
    displayOfficialsForOffice
}
