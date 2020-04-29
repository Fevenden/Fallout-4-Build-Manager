import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <section id='landing-box' className='box'>
      <h2>Welcome To BuildTech!</h2>
      <p>A Fallout 4 character build manager</p>
      <p>A better future, Online.</p>
      <Link to='/register'>Create an account!</Link>
      <Link to='/login'>Login to an existing account!</Link>
    </section>
  )
}
