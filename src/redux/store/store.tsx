
import * as redux from 'redux';
console.log('this is the redix');
console.log(redux);
const mainNav = (state: {}, action: {} ) => {
    console.log(state);
    console.log(action);
}


const store = redux.createStore;

export default store;
