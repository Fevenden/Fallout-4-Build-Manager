import React from 'react'
import Build from '../Build/Build'
import { withRouter } from 'react-router-dom'
import './ViewBuild.css'

function ViewBuild(props) {
  console.log(props.match.params.id)
  const builds = props.builds.filter(build => 
    build.id === parseInt(props.match.params.id)
  )

  return builds.map(build => 
   (
      <section className='buildView'>
        <Build build={build}/>
        <p>{build.description}</p>
      </section>
    )
  ) 
}

ViewBuild.defaultProps = {
  builds: []
}

export default withRouter(ViewBuild)