import React from 'react'
import './PerkInputs.css'

function PerkInputs(props) {
  return props.perks.map(stat => {
    const statVal = props.state.stats.filter( s =>
      s.title === stat.stat 
    )[0].value

    return (
      <section>
        <h2>{stat.stat}</h2>
        {stat.perks.map(perk => {
          return (
            <div key={perk.name} className='perk-inputs'>
              <label htmlFor={perk.name} className='tooltip'>{perk.rank}: {perk.name}
                {perk.ranked.map(rank => {
                  return (
                    <p className='tooltiptext'>Rank {rank.rank}: {rank.description}</p>
                  ) 
                })}
              </label>
              <select 
                id={perk.name} 
                className='perkInput'
                placeholder={'choose a rank'}
                disabled={
                  statVal < perk.rank
                }
                onChange={e => props.updatePerks(perk, e.target.value, stat.stat)}
              >
                <option id={`${perk.name}1`} value='0'>Choose a rank</option>
                {perk.ranked.map(rank => {
                  return (
                  <option value={rank.rank}>Rank {rank.rank}</option>
                  )
                })}
              </select>
            </div>
          )
        })}
      </section>
    )
  })
}

PerkInputs.defaultProps = {
  perks: [
    {
      stat: '',
      perks: [
        {
          rank: 1, 
          name: '',
          ranks: 1,
          ranked: [
            {
              rank: 1,
              description: ''
            }
          ]
        }
      ]
    }
  ],

  state: {
    stats: [
      {
        title: '',
        value: 1,
        index: 0
      }
    ]
  }
}

export default PerkInputs