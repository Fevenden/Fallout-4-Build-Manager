import React, {Fragment} from 'react'
import './Login.css'
import AuthApiService from '../../services/auth-api-services'
import Context from '../../context/context'

class Login extends React.Component {
  static contextType = Context

  state = {error: null}

  onLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({error: null})
    const {username, password} = e.target

    AuthApiService.postLogin({
      username: username.value,
      user_password: password.value
    })
      .then(res => {
        username.value = ''
        password.value = ''
        this.onLoginSuccess()
      })
      .catch(res => {
        this.setState({error: res.error})
      })
  }

  clickCancel(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    return (
      <Fragment>
        <section className='box'>
          <h2>Login</h2>
          <p className='error'>{this.state.error}</p>
          <form id='login-form' onSubmit={this.handleLogin}>
            <label htmlFor='login-username'>Username</label>
            <input
              type='text'
              className='user-input'
              id='login-username'
              name='username'
              placeholder='Username'
              required
            />

            <label htmlFor='login-password'>Password</label>
            <input
              type='password'
              id='login-password'
              className='user-input'
              name='password'
              placeholder='password'
              required
            />

            <div>
              <button className='buttonish' onClick={e => this.clickCancel(e)}>Cancel</button>
              <button className='buttonish' type='submit'>Login</button>
            </div>
          </form>
        </section>
        <section className='demo box'>
          <h2>Demo User</h2>
          <p>
            Username: Demo 
            <br/>
            Password: Password1*
          </p>
        </section>
      </Fragment>
    )
  }
}

export default Login