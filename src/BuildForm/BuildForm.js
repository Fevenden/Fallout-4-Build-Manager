import React from 'react'
import './BuildForm.css'
import Context from '../context'

class BuildForm extends React.Component {
  static contextType = Context
  state = {
    stats: [
      {
        title: "strength",
        value: 1,
        index: 0
      },
      {
        title: "perception",
        value: 1,
        index: 1
      },
      {
        title: "endurance",
        value: 1,
        index:2
      },
      {
        title: "charisma",
        value: 1,
        index: 3
      },
      {
        title: "intelligence",
        value: 1,
        index: 4
      },
      {
        title: "agility",
        value: 1,
        index: 5
      },
      {
        title: "luck",
        value: 1,
        index: 6
      }
    ],
    perks: {}
  }

  updateStats(i, v) {
    const stateCopy = Object.assign({}, this.state)
    stateCopy.stats = stateCopy.stats.slice()
    stateCopy.stats[i] = Object.assign({}, stateCopy.stats[i])
    stateCopy.stats[i].value = v
    this.setState(stateCopy)
  }

  render() {
    const statInputs = this.state.stats.map(stat => {
      return (
        <div className='stat-input' key={stat.index}>
          <label htmlFor={stat.title}>{stat.title.toUpperCase()}:</label>
          <input 
            type='number' 
            id={stat.title} 
            name={stat.title} 
            onChange={e => {this.updateStats(stat.index, e.target.value)}}
            min='1' max ='10' 
            defaultValue='1' 
            required 
          />
        </div>
      )
    })

    const perks = this.context.perks.map(mainStat => {
      return (
        <section>
          <h2>{mainStat.stat}</h2>
          <div>{mainStat.perks.map(perk => {
            return (
              <>
                <h3>{perk.name}</h3>
                <div>{perk.ranked.map(rank => {
                  return (
                    <>
                      <p>{rank.rank}: {rank.description}</p>
                    </>
                  )
                })}</div>
              </>
            )
          })}
          </div>
        </section>
      )
    })

    return (
      <section className='form-box'>
        <h2>Create Build</h2>
        <form id='build-form'>
          <label htmlFor='title'>Build Title:</label>
          <input type='text' id='title' name='title' required />
          <fieldset id='stats'>
            <legend>Stats</legend>
            {statInputs}
          </fieldset>
          <fieldset id='perks'>
            <legend>Perks</legend>
            {perks}
          </fieldset>
        </form>
        
      </section>
    )
  }
}

export default BuildForm