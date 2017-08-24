import * as style from 'ts-style'
import * as React from 'react'
import { Election } from '../types/voteSmartTypes'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles'

const electionContainer = () => {
    return style.create({
        
    })
}
const electionHeader = () => {
    return style.create({
        textAlign: 'center',
        display: 'block',

    })
}
const electionVotingInfoContainer = () => {
    return style.create({

    })
}
const electionCalendar = () => {
    return style.create({
        textAlign: 'center',
        display: 'inline-block',

    })
}
const voterInformation = () => {
    return style.create({
        textAlign: 'center',
        display: 'inline-block',

    })
}

const displayElection = (election: Election) => {
    var today = new Date(election.electionDay)
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)

    return (
        <div style={electionContainer()} >
            <div style={electionHeader()}>
                {election.electionDay}
                <br />
                {election.name}
                <br />
            </div>
            <div style={electionVotingInfoContainer()}>
                <div style={electionCalendar()}>
                    <InfiniteCalendar
                        width={300}
                        height={260}
                        selected={today}
                        minDate={lastWeek}
                    />
                </div>
                <div style={voterInformation()}>
                    voter info
                </div>
            </div>
        </div>
    )
}

export {
    displayElection
}
