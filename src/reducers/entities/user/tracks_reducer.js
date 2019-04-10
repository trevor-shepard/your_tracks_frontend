import { RECIEVE_USER_TRACKS } from '../../../actions/user_actions'

const tracksReducer = (state=false, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECIEVE_USER_TRACKS:
            return action.track_data;
        default:
            return state;
    }
}

export default tracksReducer;