import React from 'react'
import Context from '../context'
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
                <h3>Build</h3>
              </li>
            )
          })}
        </ul>
      </section>
    )
  }
}