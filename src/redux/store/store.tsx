
import * as redux from 'redux';
import {LoginReducer} from '../reducers/loginReducers';
import * as request from 'request-promise';
console.log("------------------------------------");
//console.log(request);
console.log("------------------------------------");
const mainNav = (state: {} = null, action: {} ) => {
    console.log(state);
    console.log(action);
}


const store = redux.createStore(LoginReducer);

export default store;
