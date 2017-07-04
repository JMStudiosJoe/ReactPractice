
import * as redux from 'redux';
import VoteSmartReducer from '../reducers/voteSmartReducers';
//const combinedReducers = redux.combineReducers({VoteSmartReducer, LoginReducer});
const store = redux.createStore(VoteSmartReducer);

export default store;
