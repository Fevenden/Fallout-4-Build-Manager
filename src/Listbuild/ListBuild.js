import React from 'react'
import { Link } from 'react-router-dom'
import './ListBuild.css'

export default function ListBuild(props) {
  return (
    <section>
      <h2>Your Saved Builds</h2>
      <ul>
        {props.builds.map(build => {
          return (
            <li key={`${build.id}`}>
              <Link to={`/builds/${build.id}`}> {build.title}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

ListBuild.defaultProps = {
  builds: []
}