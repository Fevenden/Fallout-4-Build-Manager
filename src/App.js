import React from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import BuildForm from './BuildForm/BuildForm'
import CreateAccount from './CreateAccount/CreateAccount'
import Login from './Login/Login'
import ListBuild from './Listbuild/ListBuild'
import ViewBuild from './ViewBuild/ViewBuild'
import store from './dummy-store'
import Context from './context'
import './App.css'

class App extends React.Component {
  state = {
    active_user: {},
    users: [],
    builds: [],
    perks: [],
  }

  componentDidMount() {
    //simulate api call
    setTimeout(() => {
      this.setState({
        builds: store.builds,
        users: store.users,
        perks: store.perks
      })
    }, 1000)
  }

  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  addBuild = (build) => {
    this.setState({
      builds: [...this.state.builds, build]
    })
  }

  setActiveUser = (user) => {
    this.setState({
      active_user: user
    })
  }

  render() {
    const contextValue = {
      active_user: this.state.active_user,
      users: this.state.users,
      builds: this.state.builds,
      stats: this.state.stats,
      perks: this.state.perks,
      addBuild: this.addBuild,
      setActiveUser: this.setActiveUser,
      addUser: this.addUser,
      deleteBuild: () => {},
      deleteUser: () => {}
    }
    return (
      <div className='app'>
        <Nav builds={this.state.builds} />
        <Context.Provider value={contextValue}>
          <main className='App'>
            <Route 
              exact path='/'
              component={Landing}
            />
            <Route
              path='/build-form'
              component={BuildForm} 
            />
            <Route
              path='/create-account'
              component={CreateAccount}
            />
            <Route
              path='/login'
              component={Login}
            />
            <Route 
            exact path='/:user_id/builds'
            render = {(routeProps) => 
              <ListBuild builds={this.state.builds} routeProps={routeProps}/>
            }
            />
            <Route
              path='/:user_id/builds/:id'
              render={() => 
                <ViewBuild builds={this.state.builds}/>
              }
            />
          </main>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
