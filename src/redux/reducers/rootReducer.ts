import { combineReducers } from 'redux'
import LocalVoteMattersReducer from './localVoteMattersReducer'

const rootReducer = combineReducers({
    userAddressData: LocalVoteMattersReducer
})

export default rootReducer
