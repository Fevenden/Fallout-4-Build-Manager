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
    user: [],
    builds: [],
    stats: [],
    perks: [],
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        builds: store.builds
      })
    }, 1000)
  }

  render() {
    const contextValue = {
      user: this.state.user,
      builds: this.state.builds,
      stats: this.state.stats,
      perks: this.state.perks,
      addBuild: () => {},
      addUser: () => {},
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
            exact path='/builds'
            render = {() => 
              <ListBuild builds={this.state.builds} />
            }
            />
            <Route
              path='/builds/:id'
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
