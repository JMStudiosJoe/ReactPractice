import * as React from 'react'
import { connect } from 'react-redux'
import * as style from 'ts-style' //ts-style is correct one
import { bindActionCreators } from 'redux'
import { getAddressData } from '../../redux/actions/voteSmartActions'
import store from "../../redux/store/store"
import { Office, Official, Division } from '../types/voteSmartTypes'


const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E'
const endURL = '&key='+ API_KEY
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true'


interface VoteSmartState {
    address: string
    offices?: Array<Office>
    officials?: Array<Official>
    divisions?: any
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
            divisions: []
        }
    }
    removeSpacesAddPluses() {
        return this.state.address.split(' ').join('+')      
    }
    lookupAddress(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const address = this.removeSpacesAddPluses()
        const fullRepURL = baseRepURL + address + endURL
        const fullElectionsURL = baseElectionsURL + address + endURL

        this.props.fetchAddressData(fullRepURL, this.state.address)
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
                    displayOfficialsByDivisions(
                        this.state.divisions, 
                        this.state.offices, 
                        this.state.officials
                    )
                }
                <hr />
            </div>
        </div>
        )
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            ...newProps.userAddressData
        })
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
    return(
        <div key={index}>
            <div>
                <div>{official.name}</div>
            </div>
        </div>
    )

}
const displayOfficialForOffice = (office: Office, index: number, officials: Array<Official>) => {
    const officialsForOffice: Array<Official> = getOfficialsForOffice(office, officials) 
    return officialsForOffice.map( (official: Official, index: number) => {
        return displayOfficial(official, index)
    })
}

const displayOfficialsByDivisions = (divisions: any, offices: Array<Office>, officials: Array<Official>) => {
    const divisionList = Object.keys(divisions).map( (key: string) => {
        return divisions[key]
    })
    return divisionList.reverse().map( (division: Division, index: number) => {
        const officeIndices = division.officeIndices
        const officesInDivision = officeIndices.map( (index: number) => {
            return offices[index]
        })
        if (division.name !== 'United States')
            return (
                <div key={index}>
                    <h3>{division.name}</h3>
                    <div>
                    {
                        officesInDivision.map( (office: Office, index: number) => {
                            return displayOfficialForOffice(office, index, officials)
                        })
                    }
                    </div>
                </div>
            )
    })
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddressData: (url, address) => dispatch(getAddressData(url, address)),
        goFetch: bindActionCreators(getAddressData, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VoteSmartLocallyComponent)
