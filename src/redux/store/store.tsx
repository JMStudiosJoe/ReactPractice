
import * as redux from 'redux';
import {LoginReducer} from '../reducers/loginReducers';
console.log('this is the redix');
console.log(redux);
const mainNav = (state: {}, action: {} ) => {
    console.log(state);
    console.log(action);
}


const store = redux.createStore(LoginReducer);

export default store;
