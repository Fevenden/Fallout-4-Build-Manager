import React from 'react'
import { Link } from 'react-router-dom'
import './ListBuild.css'

export default function ListBuild(props) {
  let builds = props.builds.filter(build => {
    console.log(build.user_id)
    return build.user_id === parseInt(props.routeProps.match.params.user_id)
  })

  console.log(parseInt(props.routeProps.match.params.user_id))

  return (
    <section>
      <h2>Your Saved Builds</h2>
      <ul>
        {builds == []
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

ListBuild.defaultProps = {
  builds: []
}