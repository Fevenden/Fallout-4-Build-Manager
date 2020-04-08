import React from 'react'
import './BuildForm.css'
import Context from '../context'
import PerkInputs from '../PerkInputs/PerkInputs'
import StatInputs from '../StatInputs/StatInputs'
import store from './buildStore'

class BuildForm extends React.Component {
  static contextType = Context
  state = store

  updateDescription(des) {
    this.setState({
      description: des
    })
  }

  updateTitle(title) {
    this.setState({
      title: title
    })
  }

  updateStats = (i, v) => {
    const stateCopy = Object.assign({}, this.state)
    stateCopy.stats = stateCopy.stats.slice()
    stateCopy.stats[i] = Object.assign({}, stateCopy.stats[i])
    stateCopy.stats[i].value = v
    this.disablePerk(stateCopy, i)
  }

  disablePerk = (state, i) => {
    const {stats, perks } = state
    const p = perks[i].perks.filter(perk => perk.statRank <= stats[i].value)
    const stateCopy = Object.assign({}, state)

    stateCopy.perks[i].perks = p

    this.setState(state)
    this.setPerkInputValue(stats[i])
  }

  setPerkInputValue(stat) {
    const { perks } = this.context 
    const i = perks.findIndex(s => s.stat === stat.title)

    if(stat.value < 10) {
      const p = perks[i].perks[stat.value].name
      document.getElementById(p).value = null
    }
  }

  updatePerks = (perk, v, s) => {
    const pidx = perk.rank - 1
    const ridx = v - 1
    const sidx = this.state.perks.findIndex(stat => stat.stat === s)
    if(ridx < 0) {
      const stateCopy = Object.assign({}, this.state)
      const filterPerks = stateCopy.perks[sidx].perks.filter(p => p.title !== perk.name)
      stateCopy.perks[sidx].perks = filterPerks
      return this.setState(stateCopy)
    } else {
      const p = {
        title: perk.name,
        rank: v,
        description: perk.ranked[ridx].description,
        statRank: perk.rank 
      }
      const stateCopy = Object.assign({}, this.state)
      stateCopy.perks = stateCopy.perks.slice()
      stateCopy.perks[sidx].perks[pidx] = Object.assign({}, stateCopy.perks[pidx])
      stateCopy.perks[sidx].perks[pidx] = p
      this.setState(stateCopy)
    }
  }

  handleCreateBuild(e) {
    e.preventDefault()
    const randomNum = Math.floor(Math.random() * Math.floor(100000))
    const build = {
      id: randomNum,
      user_id: this.context.active_user.id,
      title: this.state.title,
      description: this.state.description,
      stats: this.state.stats,
      perks: this.state.perks
    }

    this.context.addBuild(build)
    this.props.history.push(`/${build.user_id}/builds`)
  }

  clickCancel(e) {
    e.preventDefault()
    const userId = this.context.active_user.id
    this.props.history.push(`/${userId}/builds`)
  }

  render() {

    return (
      <section className='form-box'>
        <h2>Create Build</h2>
        <form id='build-form'>
          <label htmlFor='title'>Build Title:</label>
          <input 
            type='text' 
            id='title'
            placeholder='Title'
            onChange={e => this.updateTitle(e.target.value)} 
            name='title' 
            required 
          />
          <label htmlFor='description'>Description:</label>
          <textarea 
            id='description'
            placeholder='describe your build'
            onChange={e => this.updateDescription(e.target.value)}
            form='build-form'
            rows='6'
            cols='50'
          />
          <fieldset id='stats'>
            <legend>Stats</legend>
            <StatInputs state={this.state} updateStats={this.updateStats}/>
          </fieldset>
          <fieldset id='perks'>
            <legend>Perks</legend>
            <PerkInputs state={this.state} perks={this.context.perks} updatePerks={this.updatePerks}/>
          </fieldset>
          <div>
            <button onClick={e => this.clickCancel(e)}>Cancel</button>
            <button onClick={e => this.handleCreateBuild(e)}>Create Build</button>
          </div>
        </form>
        
      </section>
    )
  }
}

export default BuildForm