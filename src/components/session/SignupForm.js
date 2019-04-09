import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions'
import SessionForm from './SessionForm'


const mSTP = (state) => ({
  form_name: "Sign Up"
});

const mDTP = () =>  dispatch => ({
  action: (user) => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);