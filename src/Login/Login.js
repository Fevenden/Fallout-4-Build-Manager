import React from 'react'
import './Login.css'
import Context from '../context'

class Login extends React.Component {
  static contextType = Context

  state = {
    username: {
      value: '',
      touched: false
    },
    password: {
      value: '',
      touched: false
    },
    err: null
  }

  updateUsername(username) {
    this.setState({
      username: {
        value: username,
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

  validatePassword = (userPassword, password) => {
    if(userPassword !== password) {
      return this.setState({
        err: 'Username or password incorrect, try again'
      })
    } else {
      return this.setState({
        err: null
      })
    }
  }

  clickLogin(e) {
    e.preventDefault()
    const { username, password } = this.state
    const users = this.context.users.filter(user => 
      user.username === username.value
    )
    const user = users[0]
    
    if (user === undefined) {
      return this.setState({
        err: 'Username or password incorrect, try again'
      })
    } else {
      this.setState({
        err: null
      })
    }

    if (user.password !== password.value) {
      return this.setState({
        err: 'Username or password incorrect, try again'
      }) 
    } else {
       this.setState({
        err: null
      })
    }

    if(this.state.err === null) {
      this.context.setActiveUser(user)
      this.props.history.push(`/${user.id}/builds`)
    }
  }

  clickCancel(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    return (
      <section className='box'>
        <h2>Login</h2>
        <p>{this.state.err}</p>
        <form id='login-form'>
          <label htmlFor='login-username'>Username</label>
          <input 
            type='text' 
            id='login-username' 
            placeholder='Username'
            onChange={e => this.updateUsername(e.target.value)}
            required 
          />

          <label htmlFor='login-password'>Password</label>
          <input 
            type='password' 
            id='login-password' 
            placeholder='password'
            onChange={e => this.updatePassword(e.target.value)}  
            required 
          />

          <div>
            <button onClick={e => this.clickCancel(e)}>Cancel</button>
            <button onClick={e => this.clickLogin(e)}>Login</button>
          </div>
        </form>
      </section>
    )
  }
}

export default Login