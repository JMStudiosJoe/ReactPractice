import { Action } from 'redux'
import { LocalVoteMattersAction } from '../actions/localVoteMattersActions'
import { HANDLE_ADDRESS_LOOKUP } from '../actions/actionTypes'

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
