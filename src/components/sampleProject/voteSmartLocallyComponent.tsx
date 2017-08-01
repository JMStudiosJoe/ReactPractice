import * as React from "react";

import store from "../../redux/store/store"

interface VoteSmartState {
    address: string
}
class VoteSmartLocallyComponent extends React.Component<{}, VoteSmartState> {
    constructor() {
        super()
    }
    removeSpacesAddPluses() {
        const formattedAddress = this.state.address.split(' ').join('+')
        return formattedAddress
    }
    lookupAddress(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        const addressData = {
            address: this.removeSpacesAddPluses()
        }
        const data = store.dispatch({type: "LOOKUP_ADDRESS", payload: addressData})
        console.log("THE DATA returned")
        console.log(data)
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

export default VoteSmartLocallyComponent;
