import { combineReducers } from 'redux';

import userReducer from './user/user_reducer'

const entitiesReducer = combineReducers({
   user: userReducer,
});

export default entitiesReducer;
 