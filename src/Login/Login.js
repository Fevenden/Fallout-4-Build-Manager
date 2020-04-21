import React from 'react'
import './Login.css'
import AuthApiService from '../services/auth-api-services'
import TokenService from '../services/token-service'
import Context from '../context'

class Login extends React.Component {
  static contextType = Context

  state = {error: null}

  onLoginSuccess = () => {
    console.log('working')
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
        TokenService.saveAuthToken(res.authToken)
        this.onLoginSuccess()
      })
      .catch(res => {
        this.setState({error: res.error})
      })
  }

  // updateUsername(username) {
  //   this.setState({
  //     username: {
  //       value: username,
  //       touched: true
  //     }
  //   })
  // }

  // updatePassword(password) {
  //   this.setState({
  //     password: {
  //       value: password,
  //       touched: true
  //     }
  //   })
  // }

  // validatePassword = (userPassword, password) => {
  //   if(userPassword !== password) {
  //     return this.setState({
  //       err: 'Username or password incorrect, try again'
  //     })
  //   } else {
  //     return this.setState({
  //       err: null
  //     })
  //   }
  // }

  // clickLogin(e) {
  //   e.preventDefault()
  //   const { username, password } = this.state
  //   const users = this.context.users.filter(user => 
  //     user.username === username.value
  //   )
  //   const user = users[0]
    
  //   if (user === undefined) {
  //     return this.setState({
  //       err: 'Username or password incorrect, try again'
  //     })
  //   } else {
  //     this.setState({
  //       err: null
  //     })
  //   }

  //   if (user.password !== password.value) {
  //     return this.setState({
  //       err: 'Username or password incorrect, try again'
  //     }) 
  //   } else {
  //      this.setState({
  //       err: null
  //     })
  //   }

  //   if(this.state.err === null) {
  //     this.context.setActiveUser(user)
  //     this.props.history.push(`/${user.id}/builds`)
  //   }
  // }

  clickCancel(e) {
    e.preventDefault()
    this.props.history.push('/')
  }

  render() {
    return (
      <section className='box'>
        <h2>Login</h2>
        <p>{this.state.error}</p>
        <form id='login-form' onSubmit={this.handleLogin}>
          <label htmlFor='login-username'>Username</label>
          <input 
            type='text' 
            id='login-username' 
            name='username'
            placeholder='Username'
            /*onChange={e => this.updateUsername(e.target.value)} */
            required 
          />

          <label htmlFor='login-password'>Password</label>
          <input 
            type='password' 
            id='login-password' 
            name='password'
            placeholder='password'
            /*onChange={e => this.updatePassword(e.target.value)}  */
            required 
          />

          <div>
            <button onClick={e => this.clickCancel(e)}>Cancel</button>
            <button type='submit'>Login</button>
          </div>
        </form>
      </section>
    )
  }
}

export default Login