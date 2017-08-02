
import {createStore, applyMiddleware} from 'redux'
import VoteSmartReducer from '../reducers/voteSmartReducers'
import ReduxThunk from 'redux-thunk'
const store = createStore(VoteSmartReducer,{}, applyMiddleware(ReduxThunk))

export default store
