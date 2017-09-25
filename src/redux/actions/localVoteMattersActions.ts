import { Action } from 'redux'
import { HANDLE_ADDRESS_LOOKUP, HANDLE_REPRESENTATIVE, HANDLE_ELECTION_BY_ADDRESS } from './actionTypes'
import store from '../store/store'
import { postToBackend, getFromBackend } from '../../api/api'
import projectConfig from '../../../project.config'

interface LocalVoteMattersAction<Action> {
    type: string
    payload?: any
}
const getElectionWithaddress = (repResponseData: any, address: string, dispatch: any) => {
    const url: string = '/local_vote_matters/elections_info'

    return getFromBackend(url).then(function (response) {
        const addressLookupResponse = {
            ...repResponseData,
            ...response.data
        }

        dispatch(addressDataSuccess(addressLookupResponse, address))
    }).catch(function (error) {
          dispatch(addressDataFaied(error, address))
    })
}
const getAddressData = (address: string) => {
    const url: string = '/local_vote_matters/representative_info'
    const data = {
        address: address
    }
    return function(dispatch, getState) {
        if (address !== '') { 
            return postToBackend(url, data).then(function (response) {
                const repData = {
                    offices: response.data.offices,
                    officials: response.data.officials,
                    divisions: response.data.divisions,
                    address: address
                }
                getElectionWithaddress(repData, address, dispatch) 

            }).catch(function (error) {
                  dispatch(addressDataFaied(error, address))
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
const addressDataFaied = (error: any, address: string) => {
    return {
        type: HANDLE_ADDRESS_LOOKUP,
        payload: error
    }
}

export {
    getAddressData, LocalVoteMattersAction
}
