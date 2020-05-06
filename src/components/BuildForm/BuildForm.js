import React from 'react'
import './BuildForm.css'
import Context from '../../context/context'
import PerkInputs from './PerkInputs/PerkInputs'
import StatInputs from './StatInputs/StatInputs'
import BuildTechApiService from '../../services/build_tech-api-services'
import TokenService from '../../services/token-service'
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
    const { stat_total } = state
    this.state.stats.forEach(stat => {
      if (stat.perks.length === 0 ){
        this.setState({
          ...state,
          required_level: val + stat_total
        })
      }
      stat.perks.forEach(perk => {
        if(perk === null) {
          this.setState({
            ...state,
            required_level: val + stat_total
          })
        } else {
          val = val + parseInt(perk.perk_rank)
          this.setState({
            ...state,
            required_level: val + state.stat_total
          })
        }
      })
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
    const { stats } = state
    const p = stats[index].perks.map(perk => {
      if( perk === null ||perk.statRank > stats[index].value) {
        return null
      }

      return perk
    })
    const stateCopy = Object.assign({}, state)

    stateCopy.stats[index].perks = p
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
        document.getElementById(idToTarget).value = 0
      }
    })
  }

  updatePerks = (perk, v, s) => {
    const pidx = perk.rank - 1
    const ridx = v - 1
    const sidx = this.state.stats.findIndex(stat => stat.title === s)

    if(ridx < 0) {
      const stateCopy = Object.assign({}, this.state)
      stateCopy.stats[sidx].perks[pidx] = null
      this.updateRequiredLevel(stateCopy)
    } else {
      const p = {
        stat_title: s,
        title: perk.name,
        perk_rank: v,
        perk_description: perk.ranked[ridx].description,
        stat_rank: perk.rank
      }
      const stateCopy = Object.assign({}, this.state)
      stateCopy.stats[sidx].perks = stateCopy.stats[sidx].perks.slice()
      stateCopy.stats[sidx].perks[pidx] = Object.assign({}, stateCopy.stats[sidx].perks[pidx])
      stateCopy.stats[sidx].perks[pidx] = p
      this.updateRequiredLevel(stateCopy)
    }
  }

  handleSuccessfulSubmit(build) {
    if(this.context.error === null) {
      this.props.history.push(`/builds`)
      this.forceUpdate()
    }
  }

  submitBuild = (e) => {
    e.preventDefault()
    const build = {
      title: this.state.title,
      required_level: this.state.required_level,
      description: this.state.description,
      stats: this.state.stats.map(stat => {
        return {
          stat_value: stat.value,
          title: stat.title,
          perks: stat.perks
        }
      })
    }

    if(!TokenService.hasAuthToken()) {
      this.props.history.push(`/login`)
    }

    this.context.clearError()
    BuildTechApiService.postBuild(build)
      .then(res =>
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : this.handleSuccessfulSubmit(build)
      )

      .catch(err => this.context.setError(err.error))
  }

  clickCancel(e) {
    e.preventDefault()
    this.props.history.push(`/builds`)
  }

  toggleStatPerks = (e, stat) => {
    e.preventDefault()
    const hide = document.getElementsByClassName('perkfield')
    const show = document.getElementById(`${stat}-perks`)
    const inactive = document.getElementsByClassName('statheader')
    const active = e.currentTarget

    for (let i = 0; i < hide.length; i++) {
      hide[i].classList.add('hidden')
    }
    for(let j = 0; j < inactive.length; j++) {
      inactive[j].classList.remove('active')
    }
    show.classList.remove('hidden')
    active.classList.add('active')
  }

  toggleTooltip = (e, item) => {
    const tooltip = document.getElementById(`${item}-tooltip`)

    tooltip.classList.contains('hidden')
      ? tooltip.classList.remove('hidden')
      : tooltip.classList.add('hidden')
  }

  render() {
    return (
      <section className='box'>
        <h2>Create Build</h2>
          
        <p>Welcome to the build page! Here you can create a custom build and save it to your account</p>
        <p>Please enjoy your time with BuildTech. A better future, online!</p>
        <form id='build-form' onSubmit={this.submitBuild}>
          <div className='styleField'>
            <label htmlFor='title'>Build Title:</label>
            <input
              className='user-input'
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
              className='user-input'
              id='description'
              placeholder='describe your build'
              onChange={e => this.updateDescription(e.target.value)}
              form='build-form'
              rows='6'
              cols='50'
              />
            <fieldset className='box' id='stats'>
            <p>SPECIAL Points: {this.state.points}</p>
            <p>Required Level: {this.state.required_level}</p>
              <legend>SPECIAL</legend>
              <StatInputs state={this.state} decreaseStat={this.decreaseStat} increaseStat={this.increaseStat} toggleTooltip={this.toggleTooltip}/>
            </fieldset>
            <div>
              <p>{this.context.error}</p>
              <button className='buttonish' onClick={e => this.clickCancel(e)}>Cancel</button>
              <button className='buttonish' type='submit'>Create Build</button>
            </div>
          </div>
          <div className='styleField'>
          <fieldset id='perks' className='box'>
            <legend>Perks</legend>
            <div className='tab-bar'>
              {
                this.context.perks.map(p => {
                  return (
                    <button 
                      id={`${p.stat}-tab`} 
                      key={`${p.stat}-tab`} 
                      className={
                        p.stat === 'strength'
                          ? 'statheader buttonish active'
                          : 'statheader buttonish'
                      }
                      onClick={e => this.toggleStatPerks(e, p.stat)}
                    >
                      {p.stat.substring(0, 1)}
                    </button>
                  )
                })
              }
            </div>
            <section className='perks-container'>
              <PerkInputs state={this.state} perks={this.context.perks} updatePerks={this.updatePerks} toggleStatPerks={this.toggleStatPerks} toggleTooltip={this.toggleTooltip}/>
            </section>
          </fieldset>
          </div>
        </form>
      </section>
    )
  }
}

export default BuildForm
