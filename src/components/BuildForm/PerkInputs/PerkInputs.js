import React from 'react'
import './PerkInputs.css'

function PerkInputs(props) {

  return props.perks.map(stat => {
    const statVal = props.state.stats.filter( s =>
      s.title === stat.stat
    )[0].value

    return (
      <div className='perkfield hidden' id={`${stat.stat}-perks`}>
        {stat.perks.map(perk => {
          return (
            <div key={perk.name} className='perk-inputs'>
              <img 
                src={perk.img} 
                alt={`${perk.name} icon`} 
                className={
                  statVal < perk.rank
                    ? 'perkImg disabled'
                    : 'perkImg'
                } 
                onClick={e => props.toggleTooltip(e, perk.name)}
              />
              <div id={`${perk.name}-tooltip`} className='tooltiptext hidden'>{
                  perk.ranked.map(rank => {
                    return (
                        <p>Rank {rank.rank}: {rank.description}</p>
                    )
                  })}
                  <button type='button' className='buttonish' onClick={e => props.toggleTooltip(e, perk.name)}>Close</button>
                </div>
              <label
                htmlFor={perk.name}
                className={
                  (statVal < perk.rank)
                    ? 'disabled'
                    : null
                }
                >
                  {perk.name}
              </label>
              <select
                id={perk.name}
                className='perkInput buttonish'
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
        </div>
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
