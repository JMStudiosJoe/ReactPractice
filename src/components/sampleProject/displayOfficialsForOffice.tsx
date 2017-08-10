import * as React from 'react'
import * as style from 'ts-style'

import { Official, Office } from '../types/voteSmartTypes'
import { displayOfficial } from './displayOfficial'
import { fontWeightTypes } from '../scss/common'


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
            display: 'inline-block',
            margin: '6px',
            border: '1px solid black',
            borderRadius: '6px'
        })
    }
    const officeHeader = () => {
        return style.create({
            width: '180px',
            display: 'block',
            padding: '6px'
        })
    }
    const name = () => {
        return style.create({
            fontSize: '16px',
            textAlign: 'center',
            fontWeight: 'bold' as fontWeightTypes
        })
    }

    const officialsForOffice: Array<Official> = getOfficialsForOffice(office, officials) 
    //this is where the table should go
    return officialsForOffice.map( (official: Official, index: number) => {
        return (
            <div style={officeContainer()}>
                <div style={officeHeader()}>
                    <div style={name()}>{office.name}</div>
                </div>
                {displayOfficial(official, index)}
            </div>
        )
    })
}
export {
    displayOfficialsForOffice
}
