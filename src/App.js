import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import './App.css'

function App() {
  return (
    <div class='app'>
      <Nav />
      <main className='App'>
        <Landing />
      </main>
    </div>
  );
}

export default App;
