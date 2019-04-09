import { connect } from 'react-redux';

import { login, logout } from '../../actions/session_actions'
import SessionForm from './SessionForm'


const mSTP = (state) => ({
  form_name: "Log In",
  current_user: state.session
});

const mDTP = () =>  dispatch => ({
  action: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});


export default connect(mSTP, mDTP)(SessionForm);