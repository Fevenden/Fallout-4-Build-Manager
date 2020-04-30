import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Landing from '../Landing/Landing'
import PublicOnlyRoute from '../utils/PublicOnlyRoute'
import PrivateRoute from '../utils/PrivateRoute'
import BuildForm from '../BuildForm/BuildForm'
import CreateAccount from '../CreateAccount/CreateAccount'
import Login from '../Login/Login'
import Context from '../../context/context'
import ListBuild from '../Listbuild/ListBuild'
import ViewBuild from '../ViewBuild/ViewBuild'
import perks from '../../stores/perks-store'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-services'
import IdleService from '../../services/idle-service'
import NotFound from '../notFound/NotFound'
import './App.css'

class App extends React.Component {
  state = {
    builds: [],
    build: {},
    perks: perks,
    error: null
  }


  componentDidMount() {
    IdleService.setIdleCallback(this.logoutFromIdle)

    if(TokenService.hasAuthToken()){
      IdleService.registerIdleTimeResets()
      TokenService.queCallbackBeforeExpirey(() => {
        AuthApiService.postRefreshToken()
      })
    }
  }

  componentWillUnmount() {
    IdleService.unRegisterIdleResets()
    TokenService.clearCallbackBeforeExpirey()
  }

  logoutFromIdle = () => {
    TokenService.clearAuthToken()
    TokenService.clearCallbackBeforeExpirey()
    IdleService.unRegisterIdleResets()
    this.forceUpdate()
  }

  deleteBuild = (buildId) => {
    this.setState({
      builds: this.state.builds.filter(build => build.id !== Number(buildId))
    })
  }

  setBuilds = (builds) => {
    this.setState({builds: builds})
  }

  setBuild = (build) => {
    this.setState({
      build: build
    })
  }

  clearBuild = () => {
    this.setBuild({})
  }

  setError = (err) => {
    this.setState({
      error: err
    })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  render() {
    const contextValue = {
      builds: this.state.builds,
      build: this.state.build,
      perks: this.state.perks,
      error: this.state.error,
      setBuild: this.setBuild,
      deleteBuild: this.deleteBuild,
      setBuilds: this.setBuilds,
      clearBuild: this.clearBuild,
      setError: this.setError,
      clearError: this.clearError,
    }

    return (
      <div className='app'>
        <Nav builds={this.state.builds} />
        <Context.Provider value={contextValue}>
          <main className='App'>
            <Switch>
              <PublicOnlyRoute
                exact path='/'
                component={Landing}
              />
              <PrivateRoute
                path={'/build-form'}
                component={BuildForm}
              />
              <PublicOnlyRoute
                path={'/register'}
                component={CreateAccount}
              />
              <PublicOnlyRoute
                path={'/login'}
                component={Login}
              />
              <PrivateRoute
                exact path={'/builds'}
                component={ListBuild}
              />
              <PrivateRoute
                path={'/builds/:build_id'}
                component={ViewBuild}
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </main>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
