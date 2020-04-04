import React from 'react'
import Context from '../context'
import { Link } from 'react-router-dom'
import Build from '../Build/Build'
import './ListBuild.css'

export default class ListBuild extends React.Component {
  static contextType = Context

  render() {
    const { builds } = this.context
    return (
      <section>
        <h2>Your Saved Builds</h2>
        <ul>
          {builds.map(build => {
            return (
              <li key={build.id}>
               <Link to={`/builds/${build.id}`}> {build.title}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}