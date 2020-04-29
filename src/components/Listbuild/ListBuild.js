import React from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/context'
import BuildTechApiService from '../../services/build_tech-api-services.js'
import './ListBuild.css'

export default class ListBuild extends React.Component {
  static contextType = Context

  componentDidMount() {
    BuildTechApiService.getBuilds()
      .then(this.context.setBuilds)
      .catch(console.log)
  }

  render() {
    const {builds = []} = this.context
    return (
      <section>
        <h2>Your Saved Builds</h2>
        <ul>
          {builds.length === 0
            ? <p>You dont have any saved builds!<br/> Create a new One!</p>
            : builds.map(build => {
              return (
                <li key={`${build.id}`}>
                  <Link to={`/builds/${build.id}`}> {build.title}</Link>
                </li>
              )
          })}
        </ul>
        <div>
          <Link to={`/build-form`}><button>Create a new build</button></Link>
        </div>
      </section>
    )
  }
}

ListBuild.defaultProps = {
  builds: [],
  routeProps: {
    match: {
      params: {
        user_id: ''
      }
    }
  }
}
