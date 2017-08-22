import * as style from 'ts-style'
import * as React from 'react'
import { Election, Office, Division, Official } from '../types/voteSmartTypes'
import { displayDivision } from './displayDivision'

const displayElectionsAndOfficialsByDivision = (division: any, offices: Array<Office>, officials: Array<Official>, elections: Array<Election>) => {
    const divisionIDS = Object.keys(division)
    const divisionList = Object.keys(division).map( (key: string) => {
        return {
            ...division[key],
            divisionId: key
        }
    })
    const sortedDivisionList = divisionList.sort( (divisionOne, divisionTwo) => {
        return divisionTwo.divisionId.length - divisionOne.divisionId.length
    })

    return sortedDivisionList.map( (division: Division, index: number) => {
        const officeIndices = division.officeIndices
        const officesInDivision = officeIndices.map( (index: number) => {
            return offices[index]
        })
        if (division.name !== 'United States')
            return displayDivision(division, officesInDivision, officials, elections, index)
    })
}

export {
    displayElectionsAndOfficialsByDivision
}
