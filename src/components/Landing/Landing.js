import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <section id='landing-box' className='box'>
      <h2>Welcome To BuildTech!</h2>
      <p>A Fallout 4 character build manager. BuildTech makes it easier than ever to plan out your character builds.</p>
      <Link to='/register' className='buttonish'>Create an account!</Link>
      <Link to='/login' className='buttonish'>Login to an existing account!</Link>
    </section>
  )
}
