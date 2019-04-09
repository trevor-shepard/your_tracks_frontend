import { combineReducers } from 'redux';

import tracksReducer from './tracks_reducer'

const userReducer = combineReducers({
   tracks: tracksReducer,
});

export default userReducer;
 