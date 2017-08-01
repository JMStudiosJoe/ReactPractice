import {Action} from 'redux'
import store from '../store/store'
interface VoteSmartAction<Action> {
    type: string
    payload: any
}

export default VoteSmartAction
