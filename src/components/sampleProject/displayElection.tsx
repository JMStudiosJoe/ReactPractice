import * as style from 'ts-style'
import * as React from 'react'
import { Election } from '../types/voteSmartTypes'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles'


const displayElection = (election: Election) => {
    var today = new Date()
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
    return (
        <div >
            {election.electionDay}
            <br />
            {election.name}
            <br />
            <InfiniteCalendar
                width={400}
                height={600}
                selected={today}
                disabledDays={[0,6]}
                minDate={lastWeek}
            />
        </div>
    )
}

export {
    displayElection
}
