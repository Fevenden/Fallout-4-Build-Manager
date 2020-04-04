import React from 'react'
import Build from '../Build/Build'
import { withRouter } from 'react-router-dom'
import './ViewBuild.css'

function ViewBuild(props) {
  const builds = props.builds.filter(build => 
    build.id === props.match.params.id
  );

  return builds.map(b => {
    return (
      <section className='buildView'>
        <Build build={b}/>
      </section>
    )
  })
}

export default withRouter(ViewBuild)