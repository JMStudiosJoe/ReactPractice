import {Action} from 'redux'
import store from '../store/store'
import axios from 'axios'

interface VoteSmartAction<Action> {
    type: string
    payload: any
}
const getAddressData = (fullURL: string) => {
    axios.get(fullURL).then(function (response) {
        store.dispatch({type: "HANDLE_RETURN_DATA", payload: response.data.offices})
        return response
    
    }).catch(function (error) {
          console.log(error);
    });

}

export {
    getAddressData, VoteSmartAction
}
