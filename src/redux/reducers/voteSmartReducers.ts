import {Action} from 'redux'
import {VoteSmartAction, getAddressData} from '../actions/voteSmartActions'
import axios from 'axios'
const INITIAL_STATE: any = {
    address: '',
    userAddressData: {}

}
const API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E'
const endURL = '&key='+ API_KEY
const baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address='
const baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true'


const VoteSmartReducer = (state: any = INITIAL_STATE, action: VoteSmartAction<Action>): any => {
    switch(action.type) {
        case "LOOKUP_ADDRESS":
            const fullRepURL = baseRepURL + action.payload.address + endURL
            const fullElectionsURL = baseElectionsURL + action.payload.address + endURL
            console.log(state)
            getAddressData(fullRepURL)
        
        case "HANDLE_RETURN_DATA":
            console.log("in reducer handling return payload is")
            const returnData = {
                ...state,
                userAddressData: action.payload 
            }
            console.log(returnData)
            
            return returnData

        default:
            return state
    }
}
export default VoteSmartReducer
