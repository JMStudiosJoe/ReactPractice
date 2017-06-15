
import { Action } from '../actions/loginActions';
import axios from 'axios';
console.log("did you really see a dragon");
console.log(axios);
const INITIAL_STATE: any = null;
const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E';
const endURL = '&key='+ API_KEY;
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address=';
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true';
const address ='1184+Normandy+Drive+Campbell+CA+95008';
const fullRepURL = baseRepURL+address+endURL;
const fullElectionsURL = baseElectionsURL+address+endURL;
// try parallaxhttps://www.w3schools.com/howto/howto_css_parallax.asp 
export const VoteSmartReducer = (state: any = INITIAL_STATE, action: Action) => {
    switch(action.type) {
        case "LOOKUP_ADDRESS":
            console.log("in the vote smart reducer");
/*            axios.get(fullRepURL).then(function (response) {
                console.log(response);
                return response;
            
            }).catch(function (error) {
                  console.log(error);
            });
  */          
            
            return state;
        default:
            return state;
    }
}
export default VoteSmartReducer;
