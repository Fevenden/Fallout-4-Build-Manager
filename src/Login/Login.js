import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <section className='box'>
      <h2>Login</h2>
      <form id='login-form'>
        <label htmlFor='login-username'>Username</label>
        <input type='text' id='login-username' required />

        <label htmlFor='login-password'>Password</label>
        <input type='password' id='login-password' required />

        <div>
          <button>Cancel</button>
          <button>Login</button>
        </div>
      </form>
    </section>
  )
}