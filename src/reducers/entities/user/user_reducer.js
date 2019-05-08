import { combineReducers } from 'redux';

import tracksReducer from './tracks_reducer'

const userReducer = combineReducers({
   track_data: tracksReducer
});

export default userReducer;
 