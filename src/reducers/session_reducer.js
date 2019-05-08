import { combineReducers } from 'redux';

import currentUserReducer from './current_user_reducer'
import tokenReducer from './token_reducer'


const sessionReducer = combineReducers({
   currentUser: currentUserReducer,
   token: tokenReducer
});

export default sessionReducer;
 