import { connect } from 'react-redux';

import Splash from './Splash';

import { requestCurrentUserTrackCounts } from '../actions/user_actions' 

const mSTP = (state) => ({
    current_user: state.session,
    track_data: state.entities.user.track_data
});

const mDTP = () =>  dispatch => ({
    requestCurrentUserTrackCounts: (days) => dispatch(requestCurrentUserTrackCounts(days))
});

export default connect(mSTP, mDTP)(Splash);