import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import BuildForm from './BuildForm/BuildForm'
import './App.css'

function App() {
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
      </main>
    </div>
  );
}

export default App;
