import {Action} from 'redux'
import {VoteSmartAction, getAddressData} from '../actions/voteSmartActions'
import { HANDLE_ELECTION_BY_ADDRESS, HANDLE_REPRESENTATIVE, HANDLE_ADDRESS_LOOKUP } from '../actions/actionTypes'
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
        case HANDLE_ADDRESS_LOOKUP:
            return {
                ...action.payload
            }

        default:
            return state
    }
}
export default VoteSmartReducer
