import { Action } from 'redux'
import { HANDLE_REPRESENTATIVE, HANDLE_ELECTION_BY_ADDRESS } from './actionTypes'
import store from '../store/store'
import axios from 'axios'

interface VoteSmartAction<Action> {
    type: string
    payload?: any
}
const getAddressData = (fullURL: string, address: string) => {
    return function(dispatch, getState) {
        if (fullURL !== '') { 
            console.log(getState())
            return axios.get(fullURL).then(function (response) {
                const requestedData = {
                    offices: response.data.offices,
                    officials: response.data.officials,
                    divisions: response.data.divisions,
                    address: address
                }

                dispatch(addressDataSuccess(requestedData, address))
            
            }).catch(function (error) {
                  console.log(error)
            })
        }
        
    }

}
const addressDataSuccess = (addressData: any, address: string) => {
    return {
        type: 'HANDLE_RETURN_DATA',
        payload: addressData
    }
}

export {
    getAddressData, VoteSmartAction
}
