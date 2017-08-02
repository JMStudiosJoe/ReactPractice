import {Action} from 'redux'
import {VoteSmartAction, getAddressData} from '../actions/voteSmartActions';
import axios from 'axios';
const INITIAL_STATE: any = null;
const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E';
const endURL = '&key='+ API_KEY;
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address=';
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true';


const VoteSmartReducer = (state: any, action: VoteSmartAction<Action>) => {
    //next case is handle address or something like it and fire off another dispatch with the data to handle things
    //back to the componoent
    switch(action.type) {
        case "LOOKUP_ADDRESS":
            const fullRepURL = baseRepURL + action.payload.address + endURL;
            const fullElectionsURL = baseElectionsURL + action.payload.address + endURL;
            getAddressData(fullRepURL)
        
        case "HANDLE_RETURN_DATA":
            console.log("in action handling return payload is")
            const returnData = {
                ...state,
                userAddressData: action.payload 
            }
            console.log(returnData)
            return returnData

        default:
            return state;
    }
}
export default VoteSmartReducer;
