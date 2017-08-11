import * as React from 'react'
import * as style from 'ts-style'

import { Official, Office } from '../types/voteSmartTypes'
import { displayOfficial } from './displayOfficial'
import { fontWeightTypes } from '../scss/common'

const LIGHT_BLUE = '#99ccff'
const LIGHT_RED = '#ff6666'
const LIGHT_GREY = '#f2f2f2'

const getOfficialsForOffice = (office: Office, officials: Array<Official>): Array<Official> => {
    const indicies: Array<number> = office.officialIndices
    const officialsForOffice = indicies.map( (index: number) => {
        return officials[index]
    })
    return officialsForOffice
}
const displayOfficialsForOffice = (office: Office, index: number, officials: Array<Official>) => {
    const officeContainer = (party: string) => {
        let color = ''
        switch (party) {
            case 'Democratic':
                color = LIGHT_BLUE
                break
            case 'Republican':
                color = LIGHT_RED
                break
            case 'Nonpartisan':
                color = LIGHT_GREY
                break
        }
        return style.create({
            height: '260px',
            display: 'inline-block',
            margin: '6px',
            border: '1px solid black',
            borderRadius: '6px',
            backgroundColor: color
        })
    }
    const officeHeader = () => {
        return style.create({
            width: '160px',
            display: 'block',
            padding: '6px'
        })
    }
    const name = () => {
        return style.create({
            fontSize: '14px',
            height: '30px',
            textAlign: 'center',
            fontWeight: 'bold' as fontWeightTypes
        })
    }

    const officialsForOffice: Array<Official> = getOfficialsForOffice(office, officials) 
    return officialsForOffice.map( (official: Official, index: number) => {
        return (
            <div style={officeContainer(official.party)}>
                <div style={officeHeader()}>
                    <div style={name()}>{office.name}</div>
                </div>
                { displayOfficial(official, index) }
            </div>
        )
    })
}
export {
    displayOfficialsForOffice
}
