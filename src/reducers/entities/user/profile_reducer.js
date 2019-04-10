 import { RECIEVE_USER_TRACKS } from '../../../actions/user_actions'

 const profileReducer = (state=false, action) => {
     Object.freeze(state);

     switch(action.type) {
         case RECIEVE_USER_TRACKS:
            return action.user;
        default:
            return state;
     }
 }

 export default profileReducer;