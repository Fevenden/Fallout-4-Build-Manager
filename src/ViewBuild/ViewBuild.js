import React from 'react'
import Build from '../Build/Build'
import { withRouter } from 'react-router-dom'
import './ViewBuild.css'

function ViewBuild(props) {
  const builds = props.builds.filter(build => 
    build.id === parseInt(props.match.params.id)
  )

  function clickBack(e) {
    e.preventDefault()
    const userId = props.match.params.user_id
    props.history.push(`/${userId}/builds`)
  }

  function deleteBuild(e) {
    e.preventDefault()
    const buildId = props.match.params.id
    const userId = props.match.params.user_id
    props.deleteBuild(buildId)
    props.history.push(`/${userId}/builds`)
  }

  return builds.map(build => 
   (
      <section className='container box' key={build.id}>
        <Build build={build}/>
        <div>
          <button onClick={e => clickBack(e)}>Back</button>
          <button>Edit</button>
          <button onClick={e => deleteBuild(e)}>Delete</button>
      </div>
      </section>
    )
  ) 
}

ViewBuild.defaultProps = {
  builds: []
}

export default withRouter(ViewBuild)