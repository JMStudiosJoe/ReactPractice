import * as React from 'react'
import { connect } from 'react-redux'
import * as style from 'ts-style' //ts-style is correct one
import { bindActionCreators } from 'redux'
import { getAddressData } from '../../redux/actions/voteSmartActions'
import store from "../../redux/store/store"
import { Office, Official, Division, Election } from '../types/voteSmartTypes'


const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E'
const endURL = '&key='+ API_KEY
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true'
//const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/voterInfo?returnAllAvailableData=true'


interface VoteSmartState {
    address: string
    offices?: Array<Office>
    officials?: Array<Official>
    divisions?: any
    elections?: Array<Election>
    userAddressData?: any
}
interface VoteSmartProps {
    fetchAddressData: any
    goFetch: any
    userAddressData: any
}

class VoteSmartLocallyComponent extends React.Component<VoteSmartProps, VoteSmartState> {
    constructor(props) {
        super(props)
        this.state = {
            address: '',
            officials: [],
            offices: [],
            divisions: [],
            elections: []
        }
    }
    removeSpacesAddPluses() {
        return this.state.address.split(' ').join('+')      
    }
    lookupAddress(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const address = this.removeSpacesAddPluses()
        const fullRepURL = baseRepURL + address + endURL
        const fullElectionsURL = baseElectionsURL + '?' + address + endURL

        this.props.fetchAddressData(fullRepURL, fullElectionsURL, this.state.address)
    }

    handleAddress(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const address = event.target.value
        if (this.state.address !== address) {
            this.setState({
                address: address 
            })
        }
    }

    render() {
        return (
        <div>
            <input 
                type='text' 
                placeholder='Address'
                onChange={ e => this.handleAddress(e) }
            />
            <button
                onClick={ e => this.lookupAddress(e) }
            >
            Submit for info
            </button>
            <div>
                {
                    displayElectionsAndOfficialsByDivisions(
                        this.state.divisions, 
                        this.state.offices, 
                        this.state.officials,
                        this.state.elections
                    )
                }
            </div>
        </div>
        )
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            ...newProps.userAddressData
        })
        console.log(this.state)
    }
}


const getOfficialsForOffice = (office: Office, officials: Array<Official>): Array<Official> => {
    const indicies: Array<number> = office.officialIndices
    const officialsForOffice = indicies.map( (index: number) => {
        return officials[index]
    })
    return officialsForOffice
}
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
            </div>
        </div>
    )

}
const displayOfficialForOffice = (office: Office, index: number, officials: Array<Official>) => {
    const officeContainer = () => {
        return style.create({
            height: '220px',
            width: '170px'
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

const displayElection = (election: Election) => {
    console.log(election)
    return (
        <div >
            {election.electionDay}
            {election.name}
        </div>
    )
}
const displayElectionForDivision = (divisionId: string, elections: Array<Election>) => {
    console.log(divisionId)
    
    const election: Election = elections.map( (election: Election) => {
        console.log(election.ocdDivisionId)
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

const displayDivisionInfo = (division: Division, officesInDivision: Array<Office>, officials: Array<Official>, elections: Array<Election>, index: number) => {
    return (
        <div key={index}>
            <h3>{division.name}</h3>{displayElectionForDivision(division.divisionId, elections)}
            <div>
            {
                officesInDivision.map( (office: Office, index: number) => {
                    return displayOfficialForOffice(office, index, officials)
                })
            }
            </div>
            <hr />
        </div>
    )
}

const displayElectionsAndOfficialsByDivisions = (divisions: any, offices: Array<Office>, officials: Array<Official>, elections: Array<Election>) => {
    const divisionIDS = Object.keys(divisions)
    const divisionList = Object.keys(divisions).map( (key: string) => {
        return {
            ...divisions[key],
            divisionId: key
        }
    })

    return divisionList.reverse().map( (division: Division, index: number) => {
        const officeIndices = division.officeIndices
        const officesInDivision = officeIndices.map( (index: number) => {
            return offices[index]
        })
        if (division.name !== 'United States')
            return displayDivisionInfo(division, officesInDivision, officials, elections, index)
    })
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddressData: (repURL, electionsURL, address) => dispatch(getAddressData(repURL, electionsURL, address)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VoteSmartLocallyComponent)
