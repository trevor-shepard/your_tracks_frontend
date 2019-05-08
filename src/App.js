
import React from 'react';
import { Switch, HashRouter} from 'react-router-dom'
import { AuthRoute, ProtectedRoute } from './util/route_util'


import { Provider } from 'react-redux'

import Nav from './components/NavContainer';
import Splash from './components/SplashContainer';
import LoginForm from './components/session/LoginForm';
import SignupForm from './components/session/SignupForm';


const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Nav />
      <Switch>
        <AuthRoute exact path='/login' component = {LoginForm} />
        <AuthRoute exact path='/signup' component = {SignupForm} />
        <ProtectedRoute path='/' component = {Splash} />
      </Switch>
    </HashRouter>
  </Provider>
)

export default App; 