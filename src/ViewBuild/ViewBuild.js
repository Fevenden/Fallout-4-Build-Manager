import React from 'react'
import Build from '../Build/Build'
import { withRouter } from 'react-router-dom'
import './ViewBuild.css'

function ViewBuild(props) {
  const builds = props.builds.filter(build => 
    build.id === parseInt(props.match.params.id)
  )

  return builds.map(build => 
   (
      <section className='container box' key={build.id}>
        <Build build={build}/>
      </section>
    )
  ) 
}

ViewBuild.defaultProps = {
  builds: []
}

export default withRouter(ViewBuild)