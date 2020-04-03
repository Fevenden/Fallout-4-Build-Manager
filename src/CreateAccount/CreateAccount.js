import React from 'react'
import './CreateAccount.css'

export default function CreatAccount() {
  return (
    <section id='create-account-box' className='box'>
      <h2>Create Account</h2>
      <form id='create-account-form'>
        <label htmlFor='first-name'>Fist Name:</label>
        <input type='text' id='first-name' required />

        <label htmlFor='last-name'>Last Name:</label>
        <input type='text' id='last-name' required />

        <label htmlFor='create-username'>Create a Username:</label>
        <input type='text' id='create-username' required />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' required />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' required />

        <label htmlFor='verify password'>Re-enter Password:</label>
        <input type='password' id='verify-password' required />
        <div>
          <button>Cancel</button>
          <button>Create Account</button>
        </div>
      </form>
    </section>
  )
}