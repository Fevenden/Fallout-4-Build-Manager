import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(props) {
  return (
    <header>
      <Link to='/'>
        <h1>BuildTech</h1>
      </Link>
      <nav>
        <Link to='/'>logout</Link>
      </nav>
    </header>
  )
}