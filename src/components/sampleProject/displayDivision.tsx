import * as style from 'ts-style'
import * as React from 'react'
import { Election, Office, Division, Official } from '../types/voteSmartTypes'
import { displayElection } from './displayElection'
import { displayOfficialsForOffice } from './displayOfficialsForOffice'
import { displayElectionForDivision } from './displayElectionForDivision'


const displayDivision = (division: Division, officesInDivision: Array<Office>, officials: Array<Official>, elections: Array<Election>, index: number) => {
    return (
        <div key={index}>
            <h3>{division.name}</h3>{displayElectionForDivision(division.divisionId, elections)}
            <div>
            {
                officesInDivision.map( (office: Office, index: number) => {
                    return displayOfficialsForOffice(office, index, officials)
                })
            }
            </div>
            <hr />
        </div>
    )
}

export {
    displayDivision
}
