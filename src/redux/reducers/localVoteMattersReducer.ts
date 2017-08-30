import { Action } from 'redux'
import { LocalVoteMattersAction, getAddressData } from '../actions/localVoteMattersActions'
import { HANDLE_ELECTION_BY_ADDRESS, HANDLE_REPRESENTATIVE, HANDLE_ADDRESS_LOOKUP } from '../actions/actionTypes'
import axios from 'axios'
const INITIAL_STATE: any = {
    address: '',
    userAddressData: {}
}

const LocalVoteMattersReducer = (state: any = INITIAL_STATE, action: LocalVoteMattersAction<Action>): any => {
    switch(action.type) {
        case HANDLE_ADDRESS_LOOKUP:
            return {
                ...action.payload
            }

        default:
            return state
    }
}
export default LocalVoteMattersReducer
