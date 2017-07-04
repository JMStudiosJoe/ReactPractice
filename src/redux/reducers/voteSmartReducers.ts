import {Action} from 'redux'
import VoteSmartAction from '../actions/voteSmartActions';
import axios from 'axios';
const INITIAL_STATE: any = null;
const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E';
const endURL = '&key='+ API_KEY;
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address=';
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true';
const address ='1184+Normandy+Drive+Campbell+CA+95008';
const fullRepURL = baseRepURL+address+endURL;
const fullElectionsURL = baseElectionsURL+address+endURL;


const VoteSmartReducer = (state: any = INITIAL_STATE, action: VoteSmartAction<Action>) => {
    switch(action.type) {
        case "LOOKUP_ADDRESS":
            axios.get(fullRepURL).then(function (response) {
                console.log(response);
                return response;
            
            }).catch(function (error) {
                  console.log(error);
            });
            
            
            return state;
        default:
            return state;
    }
}
export default VoteSmartReducer;
