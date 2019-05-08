import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';

import { logout } from '../actions/session_actions'

const mSTP = (state) => ({
    currentUser: state.session.currentUser,
    logged_in: Boolean(state.session.token)
})

const mDTP = () => dispatch => ({
    logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP, mDTP)(Nav))