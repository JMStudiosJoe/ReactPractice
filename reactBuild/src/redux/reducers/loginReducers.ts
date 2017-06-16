import { Action } from '../actions/loginActions';
import * as request from 'request-promise';

console.log(request);

const INITIAL_STATE: any = null;

export const LoginReducer = (state: any = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case "LOG_IN":
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
export default LoginReducer;
