import * as style from 'ts-style'
import * as React from 'react'
import { Election } from '../types/voteSmartTypes'
import { displayElection } from './displayElection'


const displayElectionForDivision = (divisionId: string, elections: Array<Election>) => {
    const election: Election = elections.map( (election: Election) => {
        if (divisionId === election.ocdDivisionId) {
            return election 
        }
    })[0]
    if (election) {
        return displayElection(election)
    }
    else {
        return (<div>No Election coming up</div>)
    }
}

export {
    displayElectionForDivision
}
