import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import BuildForm from './BuildForm/BuildForm'
import CreateAccount from './CreateAccount/CreateAccount'
import Login from './Login/Login'
import './App.css'

class App extends React.Component {
  state = {
    user: [],
    builds: [],
    stats: [],
    perks: [],
  }

  render() {
    return (
      <div className='app'>
        <Nav />
        <main className='App'>
          <Route 
            exact path='/'
            component={Landing}
          />
          <Route
            path='/build-form'
            component={BuildForm} 
          />
          <Route
            path='/create-account'
            component={CreateAccount}
          />
          <Route
            path='/login'
            component={Login}
          />
        </main>
      </div>
    );
  }
}

export default App;
