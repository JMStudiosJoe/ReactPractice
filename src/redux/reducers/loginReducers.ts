import { Action } from '../actions/loginActions';

const INITIAL_STATE: any = null;

export function LoginReducer (state: any = INITIAL_STATE, action: Action) {
    switch(action.type) {
        case "LOG_IN":
            console.log(action.payload);
            console.log("what is this going to do");
            return action.payload;
        default:
            return state;
    }
}
export default LoginReducer;
