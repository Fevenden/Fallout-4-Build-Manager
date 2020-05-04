import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <section id='landing-box' className='box'>
      <h2>Welcome to BuildTech!</h2>
        <h3>Easily plan and save Fallout 4 builds in one place!</h3>
        <p>To get started select an option below.</p>
      <Link to='/register' className='buttonish'>Create an account</Link>
      <Link to='/login' className='buttonish'>Login to an existing account</Link>
    </section>
  )
}
