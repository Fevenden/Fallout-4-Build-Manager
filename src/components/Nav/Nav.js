import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import './Nav.css'

export default class Nav extends React.Component {
  handleLogoutClick = () =>{
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpirey()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  renderLogoutLink() {
    return (
      <div>
        <Link
          onClick={this.handleLogoutClick}
          to='/'
        >
        Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div>
        <Link
          to='/register'
        >
          Register
        </Link>
        {'/'}
        <Link
          to='/login'
        >
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <header>
        <Link to='/'>
          <h1>BuildTech</h1>
        </Link>
        <nav>
          {
            TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()
          }
        </nav>
      </header>
    )
  }
}
