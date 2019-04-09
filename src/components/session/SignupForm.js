import { connect } from 'react-redux';

import { signup, logout } from '../../actions/session_actions'
import SessionForm from './SessionForm'


const mSTP = (state) => ({
  form_name: "Sign Up",
  current_user: state.session
});

const mDTP = () =>  dispatch => ({
  action: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(SessionForm);