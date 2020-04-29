import React from 'react'
import Build from '../Build/Build'
import Context from '../../context/context'
import BuildTechApiService from '../../services/build_tech-api-services'
import { withRouter, Redirect } from 'react-router-dom'
import './ViewBuild.css'

class ViewBuild extends React.Component {
  static defaultProps = {
    match: { params: {}}
  }

  static contextType = Context

  componentDidMount() {
    const { build_id } = this.props.match.params
    this.context.clearError()
    BuildTechApiService.getBuildById(build_id)
      .then(this.context.setBuild)
      .catch(err => this.context.setError(err.error))
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
    this.forceUpdate()
  }

  onClickDelete(e) {
    e.preventDefault()
    const {build_id} = this.props.match.params
    BuildTechApiService.deleteBuild(build_id)
      .then(this.onDeleteSuccess(build_id))
      .catch(err => this.context.setError(err.error))
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
    if (this.context.error !== null)  {
      render = <p className='error'>{this.context.error}</p>
    } else if(!build.id) {
      render = <div className='loading'><p>Loading</p></div>
    } else {
      render = this.renderBuild()
    }
    return (
      <section className='container box'>
        <div>
          {render}
          <button onClick={e => this.backClick(e)}>Back</button>
          <button onClick={e => this.onClickDelete(e)}>Delete</button>
        </div>
      </section>
    )
  }
}

export default withRouter(ViewBuild)
