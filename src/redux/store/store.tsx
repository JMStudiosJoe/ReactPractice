
import * as redux from 'redux';
import {LoginReducer} from '../reducers/loginReducers';

const store = redux.createStore(LoginReducer);

export default store;
