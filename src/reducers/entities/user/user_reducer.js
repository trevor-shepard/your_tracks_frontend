import { combineReducers } from 'redux';

import tracksReducer from './tracks_reducer'
import profileReducer from './profile_reducer'

const userReducer = combineReducers({
   track_data: tracksReducer
});

export default userReducer;
 