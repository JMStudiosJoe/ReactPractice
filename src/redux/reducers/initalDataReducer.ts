import { Action } from 'redux'
import { HANDLE_PARALLAX_DATA } from '../actions/actionTypes'
interface InitalAction<Action> {
    type: string,
    payload?: any
}
const INITIAL_STATE: any = {
        address: '',
        userAddressData: {}
}

const InitialDataReducer = (state: any = INITIAL_STATE, action: InitalAction<Action>): any => {
    switch(action.type) {
        case HANDLE_PARALLAX_DATA:
            console.log(action.payload)
            return {
                ...action.payload
            }

        default:
            return state
    }
}
export default InitialDataReducer
