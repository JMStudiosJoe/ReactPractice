import { combineReducers } from 'redux'
import voteSmartReducer from './voteSmartReducers'

const rootReducer = combineReducers({
    userAddressData: voteSmartReducer
})

export default rootReducer
