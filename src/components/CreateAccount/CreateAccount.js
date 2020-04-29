import React from 'react'
import { withRouter } from 'react-router-dom'
import ValidationError from '../../ValidationError'
import Context from '../../context/context'
import AuthApiService from '../../services/auth-api-services'
import './CreateAccount.css'

class CreatAccount extends React.Component {
  static contextType = Context

  state = {error: null}

  handleSuccessfulNewUser = (user) => {
    const { history } = this.props
    history.push('/login')

  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { full_name, username, email, password} = e.target

    this.setState({error: null})
    AuthApiService.postUser({
      username: username.value,
      user_password: password.value,
      full_name: full_name.value,
      email: email.value
    })
      .then(user => {
        full_name.value = ''
        email.value = ''
        username.value = ''
        password.value = ''
        this.handleSuccessfulNewUser()
      })
      .catch(res => {
        this.setState({ error: res.error})
      })
  }

  validateEmail() {
    const email = this.state.email.value
    const req = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.length === 0) {
      return 'An email is required'
    } else if (!req.test(email)) {
      return 'Must be in standard email format example@email.com'
    }
  }

  validatePassword() {
    const password = this.state.password.value
    if (password.length === 0) {
      return 'A password is required'
    } else if (password.length < 4) {
      return 'Your password must be at least 4 characters'
    }
  }


  validatePasswordsMatch() {
    if (this.state.password.value !== this.state.re_password.value) {
      return 'passwords do not match'
    }
  }


  validateNames(name) {
    let usedName
    if (name === 'first name') {
      usedName = this.state.first_name.value
    } else if (name === 'last name') {
      usedName = this.state.last_name.value
    } else {
      usedName = this.state.username.value
    }

    if (usedName.length === 0 ) {
      return `A ${name} is required`
    } else if (usedName.length < 2) {
      return `A ${name} must be at least 2 characters`
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const randomNum = Math.floor(Math.random() * Math.floor(100000))
    const user = {
     id: randomNum,
      username: this.state.username.value,
      first_name: this.state.first_name.value,
      last_name: this.state.last_name.value,
      email: this.state.email.value,
      password: this.state.password.value
    }

    this.context.setActiveUser(user)
    this.context.addUser(user)
    this.props.history.push(`/${user.id}/builds`)
  }

  handleClickCancel(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {

    return (
      <section id='create-account-box' className='box'>
        <h2>Create Account</h2>
        <form id='create-account-form' onSubmit={this.handleSubmit}>
          <label htmlFor='full_name'>Full Name:</label>
          <input
            type='text'
            id='full_name'
            name= 'full_name'
            placeholder='Full Name'
            required
          />

          <label htmlFor='create-username'>Create a Username:</label>
          <input
            type='text'
            id='create-username'
            name='username'
            placeholder='Username'
            required
          />

          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='youremail@email.com'
            required
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='passwword'
            placeholder='Password'
            required
          />

          <label htmlFor='verify password'>Re-enter Password:</label>
          <input
            type='password'
            id='verify-password'
            placeholder='Re-enter password'
            required
          />

          <div>
            <button onClick={e => this.handleClickCancel(e)}>Cancel</button>
            <button type='submit'>
              Create Account
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(CreatAccount)
