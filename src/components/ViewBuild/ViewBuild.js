import React from 'react'
import Build from '../Build/Build'
import Context from '../../context/context'
import BuildTechApiService from '../../services/build_tech-api-services'
import { withRouter } from 'react-router-dom'
import './ViewBuild.css'

class ViewBuild extends React.Component {
  static defaultProps = {
    match: { params: {}}
  }

  static contextType = Context

  // const builds = props.builds.filter(build =>
  //   build.id === parseInt(props.match.params.build_id)
  // )

  componentDidMount() {
    const { build_id } = this.props.match.params
    BuildTechApiService.getBuildById(build_id)
      .then(this.context.setBuild)
      .catch(console.log)
  }

  componentWillUnmount() {
    this.context.clearBuild()
  }

  backClick(e) {
    e.preventDefault()
    this.props.history.push(`/builds`)
  }

  onDeleteSuccess(build_id) {
    this.context.deleteBuild(build_id)
    this.props.history.push('/builds')
  }

  onClickDelete(e) {
    e.preventDefault()
    const {build_id} = this.props.match.params
    BuildTechApiService.deleteBuild(build_id)
      .then(this.onDeleteSuccess(build_id))
      .catch(console.log)
  }

  renderBuild() {
    const { build } = this.context
    return (
      <Build build={build}/>
    )
  }

  render() {
    const {build} = this.context
    let render
    if(!build.id) {
      render = <div className='loading' />
    } else {
      render = this.renderBuild()
    }
    return (
      <section className='container box'>
        <div>
          {render}
          <button onClick={e => this.backClick(e)}>Back</button>
          <button>Edit</button>
          <button onClick={e => this.onClickDelete(e)}>Delete</button>
        </div>
      </section>
    )
  }
}

// ViewBuild.defaultProps = {
//   builds: []
// }

export default withRouter(ViewBuild)
