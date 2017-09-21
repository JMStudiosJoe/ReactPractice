import { combineReducers } from 'redux'
import LocalVoteMattersReducer from './localVoteMattersReducer'
import InitialDataReducer from './initalDataReducer'

const rootReducer = combineReducers({
    userAddressData: LocalVoteMattersReducer,
    InitialDataReducer
})

export default rootReducer
