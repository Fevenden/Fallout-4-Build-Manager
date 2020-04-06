import React from 'react'
import { withRouter } from 'react-router-dom'
import ValidationError from '../ValidationError'
import Context from '../context'
import './CreateAccount.css'

class CreatAccount extends React.Component {
  static contextType = Context

  state = {
    first_name:{
      value:'',
      touched: false
    },
    last_name: {
      value: '',
      touched: false
    },
    username: {
      value: '',
      touched: false
    },
    email: {
      value: '',
      touched: false
    },
    password: {
      value: '',
      touched: false
    },
    re_password: {
      value: '',
      touched: false
    }
  }

  updateFirstName(firstName) {
    this.setState({
      first_name: {
        value: firstName,
        touched: true
      }
    })
  }

  updateLastName(lastName) {
    this.setState({
      last_name: {
        value: lastName,
        touched: true
      }
    })
  }

  updateUsername(username) {
    this.setState({
      username: {
        value: username,
        touched: true
      }
    })
  }

  updateEmail(email) {
    this.setState({
      email: {
        value: email,
        touched: true
      }
    })
  }

  updatePassword(password) {
    this.setState({
      password: {
        value: password,
        touched: true
      }
    })
  }

  updateRePassword(rePassword) {
    this.setState({
      re_password: {
        value: rePassword,
        touched: true
      }
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
        <form id='create-account-form'>
          <label htmlFor='first-name'>Fist Name:</label>
          <input 
            type='text' 
            id='first-name' 
            placeholder='First Name'
            onChange={e => this.updateFirstName(e.target.value)}
            required 
          />

          {this.state.first_name.touched && (
            <ValidationError message={this.validateNames('first name')} />
          )}

          <label htmlFor='last-name'>Last Name:</label>
          <input 
            type='text' 
            id='last-name' 
            placeholder='Last Name'
            onChange={e => this.updateLastName(e.target.value)}
            required 
          />

          {this.state.last_name.touched && (
            <ValidationError message={this.validateNames('last name')} />
          )}

          <label htmlFor='create-username'>Create a Username:</label>
          <input 
            type='text' 
            id='create-username' 
            placeholder='Username'
            onChange={e => this.updateUsername(e.target.value)}
            required 
          />

          {this.state.username.touched && (
            <ValidationError message={this.validateNames('username')} />
          )}

          <label htmlFor='email'>Email:</label>
          <input 
            type='email' 
            id='email' 
            placeholder='youremail@email.com'
            onChange={e => this.updateEmail(e.target.value)}
            required 
          />

          {this.state.email.touched && (
            <ValidationError message={this.validateEmail()}/>
          )}

          <label htmlFor='password'>Password:</label>
          <input 
            type='password'
            id='password' 
            placeholder='Password'
            onChange={e => this.updatePassword(e.target.value)} 
            required 
          />

          {this.state.password.touched && (
            <ValidationError message={this.validatePassword()}/>
          )}

          <label htmlFor='verify password'>Re-enter Password:</label>
          <input 
            type='password' 
            id='verify-password' 
            placeholder='Re-enter password'
            onChange={e => this.updateRePassword(e.target.value)}
            required 
          />

          {this.state.re_password.touched && (
            <ValidationError message={this.validatePasswordsMatch()}/>
          )}
        

          <div>
            <button onClick={e => this.handleClickCancel(e)}>Cancel</button>
            <button 
              onClick={e => this.handleSubmit(e)}
              disabled={
                this.validatePasswordsMatch() ||
                this.validatePassword() ||
                this.validateEmail() ||
                this.validateNames() 
              }
            >
              Create Account
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default withRouter(CreatAccount)