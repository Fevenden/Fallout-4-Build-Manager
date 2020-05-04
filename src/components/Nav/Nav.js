import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'
import './Nav.css'

export default class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpirey()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  renderLogoutLink() {
    return (
      <nav>
        <Link className='navlink'
          onClick={this.handleLogoutClick}
          to='/'
        >
        Logout
        </Link>
      </nav>
    )
  }

  renderLoginLink() {
    return (
      <nav>
        <Link className='navlink'
          to='/register'
        >
          Register
        </Link>
        {' '}
        <Link className='navlink'
          to='/login'
        >
          Log in
        </Link>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <Link to='/'>
          <h1 className='buildTech'>BuildTech</h1>
        </Link>
          {
            TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()
          }
      </header>
    )
  }
}
