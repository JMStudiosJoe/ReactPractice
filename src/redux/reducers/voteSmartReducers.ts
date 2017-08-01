import {Action} from 'redux'
import VoteSmartAction from '../actions/voteSmartActions';
import axios from 'axios';
const INITIAL_STATE: any = null;
const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E';
const endURL = '&key='+ API_KEY;
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address=';
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true';
const address ='1184+Normandy+Drive+Campbell+CA+95008';


const VoteSmartReducer = (state: any = INITIAL_STATE, action: VoteSmartAction<Action>) => {
    //next case is handle address or something like it and fire off another dispatch with the data to handle things
    //back to the componoent
    switch(action.type) {
        case "LOOKUP_ADDRESS":
            const fullRepURL = baseRepURL + action.payload.address + endURL;
            const fullElectionsURL = baseElectionsURL + action.payload.address + endURL;
            axios.get(fullRepURL).then(function (response) {
                console.log(response)
                return response;
            
            }).catch(function (error) {
                  console.log(error);
            });
        
        case "HANDLE_RETURN_DATA":
            console.log(state)
            console.log(action)
            return state

        default:
            return state;
    }
}
export default VoteSmartReducer;
