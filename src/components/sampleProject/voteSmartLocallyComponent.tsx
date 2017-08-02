import * as React from 'react'
import { connect } from 'react-redux'
import { getAddressData } from '../../redux/actions/voteSmartActions'
import store from "../../redux/store/store"
interface VoteSmartState {
    address: string
    userAddressData?: any
}
interface VoteSmartProps {
    fetchAddressData: any 
}
const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E'
const endURL = '&key='+ API_KEY
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true'
class VoteSmartLocallyComponent extends React.Component<VoteSmartProps, VoteSmartState> {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            address: '',
            userAddressData: {}
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
        this.props.fetchAddressData(fullRepURL)
            /*
        store.subscribe(this.render)
        store.dispatch({
            type: 'LOOKUP_ADDRESS',
            payload: address
        })
             */
    }

    handleAddress(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        const address = event.target.value
        this.setState({
            address: address 
        })
    }

    render() {
        return (
        <div>
            {console.log('log in the render method')}
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

}

const mapStateToProps = (state) => {
    return {
        address: '',
        userAddressData: {}
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAddressData: (url) => dispatch(getAddressData(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VoteSmartLocallyComponent)
