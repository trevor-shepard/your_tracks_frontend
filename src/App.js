
import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom'

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
        <Route exact path='/login' component = {LoginForm} />
        <Route exact path='/signup' component = {SignupForm} />
        <Route path='/' component = {Splash} />
      </Switch>
    </HashRouter>
  </Provider>
)

export default App;