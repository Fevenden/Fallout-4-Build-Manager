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

  updateRequiredLevel = (state) => {
    let val = 1
    this.state.perks.forEach(primaryStat => {
      if (primaryStat.perks.length === 0) {
        this.setState({
          ...state,
          required_level: val + state.stat_total})
      } else {
        primaryStat.perks.forEach(perk => {
          val = val + parseInt(perk.rank)
          this.setState({
            ...state,
            required_level: + state.stat_total
          })
        })
      }
    })
  }

  increaseStat = (index) => {
    const stateCopy = Object.assign({}, this.state)
    stateCopy.stats = stateCopy.stats.slice()
    stateCopy.stats[index] = Object.assign({}, stateCopy.stats[index])
    stateCopy.stats[index].value = stateCopy.stats[index].value + 1
    if (stateCopy.points > 0) {
      stateCopy.points = stateCopy.points -  1
    } else {
      stateCopy.stat_total = stateCopy.stat_total + 1 
    }
    
    this.updateRequiredLevel(stateCopy)
  }

  decreaseStat = (index) => {
    const stateCopy = Object.assign({}, this.state)
    stateCopy.stats = stateCopy.stats.slice()
    stateCopy.stats[index] = Object.assign({}, stateCopy.stats[index])
    stateCopy.stats[index].value = stateCopy.stats[index].value - 1
    if(stateCopy.stat_total < 1) {
      stateCopy.points = stateCopy.points + 1
    } else {
      stateCopy.stat_total = stateCopy.stat_total - 1
    }
    
    this.disablePerk(stateCopy, index)
  }
  
  disablePerk = (state, index) => {
    const {stats, perks } = state
    const p = perks[index].perks.filter(perk => perk.statRank <= stats[index].value)
    const stateCopy = Object.assign({}, state)
    
    stateCopy.perks[index].perks = p
    this.updateRequiredLevel(state)
    this.clearPerkInputValue(index)
  }

  clearPerkInputValue(index) {
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const { perks } = this.context 
    const  stat = this.state.stats[index]
    const pIndex = perks.findIndex(s => s.stat === stat.title)

    nums.forEach(num => {
      if (perks[index].perks[num].rank === stat.value) {
        const idToTarget = perks[pIndex].perks[num].name
        console.log(document.getElementById(idToTarget).value)
        document.getElementById(idToTarget).value = 0
      }
    })
  }

  updatePerks = (perk, v, s) => {
    const pidx = perk.rank - 1
    const ridx = v - 1
    const sidx = this.state.perks.findIndex(stat => stat.stat === s)
    if(ridx < 0) {
      const stateCopy = Object.assign({}, this.state)
      const filterPerks = stateCopy.perks[sidx].perks.filter(p => p.title !== perk.name)
      stateCopy.perks[sidx].perks = filterPerks
      this.updateRequiredLevel(stateCopy)
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
      this.updateRequiredLevel(stateCopy)
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
        <p>Welcome to the build page! Here you can create a custom build and save it to your account</p>
        <p>Perks become available as you increase your special stat.</p> <p>If you aren't sure what a Special stat or perk does just over hover it to learn more!</p>
        <p>Please enjoy your time with BuildTech. A better future, online!</p>
        <form id='build-form'>
          <label htmlFor='title'>Build Title:</label>
          <input 
            className='text'
            type='text' 
            id='title'
            placeholder='Title'
            defaultValue=''
            onChange={e => this.updateTitle(e.target.value)} 
            name='title' 
            required 
          />
          <label htmlFor='description'>Description:</label>
          <textarea 
            className='text'
            id='description'
            placeholder='describe your build'
            onChange={e => this.updateDescription(e.target.value)}
            form='build-form'
            rows='6'
            cols='50'
          />
          <fieldset id='stats'>
          <p>SPECIAL Points: {this.state.points}</p>
          <p>Required Level: {this.state.required_level}</p>
            <legend>SPECIAL</legend>
            <StatInputs state={this.state} decreaseStat={this.decreaseStat} increaseStat={this.increaseStat}/>
          </fieldset>
          <fieldset id='perks'>
            <legend>Perks</legend>
            <p>Perks become available as you increase your special stat. The required rank for a perk is listed on the left. Perks will increase the required level regardless of the amount of Special points available.</p>
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