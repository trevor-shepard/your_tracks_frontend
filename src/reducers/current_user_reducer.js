import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';


const currentUserReducer= (state=false, action) => {
    Object.freeze(state)

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return action.currentUser.username
        case LOGOUT_CURRENT_USER:
            return false;
        default:
            return state;
    }
};

export default currentUserReducer;