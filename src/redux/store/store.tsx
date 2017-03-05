
import * as redux from 'redux';
import {LoginReducer} from '../reducers/loginReducers';

export const mainNav = (state: {} = null, action: {} ) => {
    console.log(state);
    console.log(action);
}


const store = redux.createStore(LoginReducer);

export default store;
