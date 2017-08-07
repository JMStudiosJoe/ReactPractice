import * as style from 'ts-style'
import * as React from 'react'
import { Election } from '../types/voteSmartTypes'

const displayElection = (election: Election) => {
    return (
        <div >
            {election.electionDay}
            {election.name}
        </div>
    )
}

export {
    displayElection
}
