import { Action } from 'redux'
import { HANDLE_ADDRESS_LOOKUP, HANDLE_REPRESENTATIVE, HANDLE_ELECTION_BY_ADDRESS } from './actionTypes'
import store from '../store/store'
import axios from 'axios'

interface VoteSmartAction<Action> {
    type: string
    payload?: any
}
const pingBackend = () => {
    const url: string = 'http://localhost:5000/hello'

    return axios.get(url).then(function (response) {
        console.log(response)

    }).catch(function (error) {
          console.log(error)
    })
}
const getElectionWithaddress = (electionsURL: string, repResponseData: any, address: string, dispatch: any) => {
    pingBackend()
    return axios.get(electionsURL).then(function (response) {
        const addressLookupResponse = {
            ...repResponseData,
            ...response.data
        }

        dispatch(addressDataSuccess(addressLookupResponse, address))
    }).catch(function (error) {
          console.log(error)
    })
}
const getAddressData = (repURL: string, electionsURL: string, address: string) => {
    return function(dispatch, getState) {
        if (repURL !== '') { 
            return axios.get(repURL).then(function (response) {
                const repData = {
                    offices: response.data.offices,
                    officials: response.data.officials,
                    divisions: response.data.divisions,
                    address: address
                }
                getElectionWithaddress(electionsURL, repData, address, dispatch) 

            }).catch(function (error) {
                  console.log(error)
            })
        }
    }
}
const addressDataSuccess = (addressData: any, address: string) => {
    return {
        type: HANDLE_ADDRESS_LOOKUP,
        payload: addressData
    }
}

export {
    getAddressData, VoteSmartAction
}
