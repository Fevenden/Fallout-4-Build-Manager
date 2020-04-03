import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <header>
      <h1>Fallout 4 Build Manager</h1>
      <nav>
        <Link to='#'>login</Link>
        <span>/</span>
        <Link to='#'>logout</Link>
      </nav>
    </header>
  )
}