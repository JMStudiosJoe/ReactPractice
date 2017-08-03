import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAddressData } from '../../redux/actions/voteSmartActions'
import store from "../../redux/store/store"
import { Office, Official, Division } from '../types/voteSmartTypes'


interface VoteSmartState {
    address: string
    offices?: Array<Office>
    officials?: Array<Official>
    divisions?: Array<Division>
    userAddressData?: any
}
interface VoteSmartProps {
    fetchAddressData: any
    goFetch: any
    userAddressData: any
}
const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E'
const endURL = '&key='+ API_KEY
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true'
class VoteSmartLocallyComponent extends React.Component<VoteSmartProps, VoteSmartState> {
    constructor(props) {
        super(props)
        this.state = {
            address: ''
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
            {console.log('---------render---------')}
            {console.log(this.state)}
            vote smart kids
            need to connect the redux and suff to make request
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
        )
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            ...newProps.userAddressData
        })

    }
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
