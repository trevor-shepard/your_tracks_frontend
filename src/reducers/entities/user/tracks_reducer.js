import { RECIEVE_USER_TRACKS } from '../../../actions/user_actions'
import { LOGOUT_CURRENT_USER } from '../../../actions/session_actions'

const tracksReducer = (state=false, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECIEVE_USER_TRACKS:
            return action.track_data;
        case LOGOUT_CURRENT_USER:
            return false
        default:
            return state;
    }
}

export default tracksReducer;