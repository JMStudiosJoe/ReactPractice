
import * as redux from 'redux';
import {LoginReducer} from '../reducers/loginReducers';
import {VoteSmartReducer} from '../reducers/voteSmartReducers';
const combinedReducers = redux.combineReducers({VoteSmartReducer, LoginReducer});
const store = redux.createStore(combinedReducers);

export default store;
