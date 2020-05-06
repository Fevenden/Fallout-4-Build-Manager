import React from 'react'
import { withRouter } from 'react-router-dom'
import Context from '../../context/context'
import AuthApiService from '../../services/auth-api-services'
import './CreateAccount.css'

class CreatAccount extends React.Component {
  static contextType = Context

  handleSuccessfulNewUser = (user) => {
    const { history } = this.props
    history.push('/login')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { full_name, username, email, password, matchPassword} = e.target

    this.context.clearError({error: null})
      AuthApiService.postUser({
        username: username.value,
        user_password: password.value,
        full_name: full_name.value,
        email: email.value,
        matchPassword: matchPassword.value
      })
        .then(user => {
          full_name.value = ''
          email.value = ''
          username.value = ''
          password.value = ''
          matchPassword.value = ''
          this.handleSuccessfulNewUser()
        })
        .catch(res => this.context.setError(res.error))
  }

  handleClickCancel(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {

    return (
      <section id='create-account-box' className='box'>
        <h2>Create Account</h2>
        <p className='error'>{this.context.error}</p>
        <form id='create-account-form' onSubmit={this.handleSubmit}>
          <label htmlFor='full_name'>Full Name:</label>
          <input
            type='text'
            className='user-input'
            id='full_name'
            name= 'full_name'
            placeholder='Full Name'
            required
          />

          <label htmlFor='create-username'>Create a Username:</label>
          <input
            type='text'
            className='user-input'
            id='create-username'
            name='username'
            placeholder='Username'
            required
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            className='user-input'
            id='email'
            name='email'
            placeholder='youremail@email.com'
            required
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            className='user-input'
            id='password'
            name='passwword'
            placeholder='Password'
            required
          />

          <label htmlFor='verify-password'>Re-enter Password:</label>
          <input
            type='password'
            className='user-input'
            id='verify-password'
            name='matchPassword'
            placeholder='Re-enter password'
            required
          />

          <div>
            <button className='buttonish' onClick={e => this.handleClickCancel(e)}>Cancel</button>
            <button className='buttonish' type='submit'>
              Create Account
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(CreatAccount)
