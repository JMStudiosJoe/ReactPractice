import * as React from 'react'
import { connect } from 'react-redux'
import * as style from 'ts-style' //ts-style is correct one
import { bindActionCreators } from 'redux'
import { getAddressData } from '../../redux/actions/voteSmartActions'
import store from "../../redux/store/store"
import { Office, Official, Division, Election } from '../types/voteSmartTypes'
import { displayElectionsAndOfficialsByDivision } from './displayElectionsAndOfficialsByDivision'


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

const addressInput = () => {
    return style.create({
        margin: '10px',
        textAlign: 'center'
    })
}
class LocalVoteMattersComponent extends React.Component<VoteSmartProps, VoteSmartState> {
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
        this.props.fetchAddressData(this.state.address)
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
                <div style={addressInput()}>
                    <span>ex: 1184 normandy drive campbell ca 95008</span>
                    <br />
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
                </div>
                <div>
                    {
                        displayElectionsAndOfficialsByDivision(
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


const mapStateToProps = (state) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddressData: (address) => dispatch(getAddressData(address)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LocalVoteMattersComponent)
