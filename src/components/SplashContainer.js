import { connect } from 'react-redux';

import Splash from './Splash';



const mSTP = (state) => ({
    current_user: state.session
});

const mDTP = () =>  dispatch => ({

});

export default connect(mSTP, mDTP)(Splash);