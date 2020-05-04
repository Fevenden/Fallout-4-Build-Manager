import React from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/context'
import BuildTechApiService from '../../services/build_tech-api-services.js'
import './ListBuild.css'

export default class ListBuild extends React.Component {
  static contextType = Context

  componentDidMount() {
    this.context.clearError()
    BuildTechApiService.getBuilds()
      .then(this.context.setBuilds)
      .catch(err => this.context.setError(err.error))
  }

  render() {
    const {builds = []} = this.context
    return (
      <section className='users-builds'>
        <h2>Your Saved Builds</h2>
        {this.context.error !== null
          ? (<div>{this.context.error}</div>)
          : null
        }
        <ul className='build-list'>
          {builds.length === 0
            ? <p>You dont have any saved builds!<br/> Create a new One!</p>
            : builds.map(build => {
              return (
                <Link className='buildLink' to={`/builds/${build.id}`}>
                  <li key={`${build.id}`} className='box'>
                    <h3> {build.title}</h3>
                    <p>{build.description}</p>
                  </li>
                </Link>
              )
          })}
        </ul>
        <div>
          <Link className='buttonish' to={`/build-form`}>Create a new build</Link>
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
