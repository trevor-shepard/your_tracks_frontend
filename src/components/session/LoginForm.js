import { connect } from 'react-redux';

import { login } from '../../actions/session_actions'
import SessionForm from './SessionForm'


const mSTP = (state) => ({
  form_name: "Log In"
});

const mDTP = () =>  dispatch => ({
  action: (user) => dispatch(login(user))
});


export default connect(mSTP, mDTP)(SessionForm);