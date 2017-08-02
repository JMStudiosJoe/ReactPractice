import {Action} from 'redux'
import store from '../store/store'
import axios from 'axios'

interface VoteSmartAction<Action> {
    type: string
    payload?: any
}
const getAddressData = (fullURL: string) => {
    return function(dispatch, getState) {
        if (fullURL !== '') { 
            return axios.get(fullURL).then(function (response) {
                console.log(dispatch)
                console.log(getState())
                console.log("in the axios response")
                dispatch(addressDataSuccess(response))
            
            }).catch(function (error) {
                  console.log(error)
            })
        }
        
    }

}
const addressDataSuccess = (addressData: any) => {
    return {
        type: 'HANDLE_RETURN_DATA',
        payload: addressData,
        addressData
    }
}

export {
    getAddressData, VoteSmartAction
}
