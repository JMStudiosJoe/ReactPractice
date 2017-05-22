
import * as redux from 'redux';
import {LoginReducer} from '../reducers/loginReducers';
import {VoteSmartReducer} from '../reducers/voteSmartReducers';
const store = redux.createStore(VoteSmartReducer);

export default store;
