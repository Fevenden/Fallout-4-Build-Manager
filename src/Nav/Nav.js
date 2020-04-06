import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
  return (
    <header>
      <Link to='/'>
        <h1>Fallout 4 Build Manager</h1>
      </Link>
      <nav>
        <Link to='/login'>login</Link>
        <span>/</span>
        <Link to='/'>logout</Link>
      </nav>
    </header>
  )
}