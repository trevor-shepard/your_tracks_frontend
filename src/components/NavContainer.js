import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';

import { logout } from '../actions/session_actions'

const mSTP = (state) => ({
    current_user: state.session
})

const mDTP = () => dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP, mDTP)(Nav))