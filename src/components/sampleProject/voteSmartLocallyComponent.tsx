import * as React from 'react'
import { connect } from 'react-redux'
import * as style from 'ts-style' //ts-style is correct one
import { bindActionCreators } from 'redux'
import { getAddressData } from '../../redux/actions/voteSmartActions'
import store from "../../redux/store/store"
import { Office, Official, Division, Election } from '../types/voteSmartTypes'
import { displayOfficial } from './displayOfficial'
import { displayDivision } from './displayDivision'


const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E'
const endURL = '&key='+ API_KEY
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true'
//const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/voterinfo?address='


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
    lookupAddress(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const address = this.state.address.split(' ').join('+')      
        const electAddress = this.state.address.split(' ').join('%20')
        const reqAllData = '&returnAllAvailableData=true&alt=json'
        const fullRepURL = baseRepURL + address + endURL
        const fullElectionsURL = baseElectionsURL + electAddress + reqAllData + endURL
        const electionsURL = baseElectionsURL + endURL

        this.props.fetchAddressData(fullRepURL, electionsURL, this.state.address)
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
            return displayDivision(division, officesInDivision, officials, elections, index)
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
