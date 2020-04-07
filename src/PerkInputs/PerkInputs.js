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
            <div key={perk.name}>
              <label htmlFor={perk.name} className='tooltip'>{perk.name}
                {perk.ranked.map(rank => {
                  return (
                    <p className='tooltiptext'>Rank {rank.rank}: {rank.description}</p>
                  ) 
                })}
              </label>
              <input 
                type='number'
                id={perk.name}
                min='0'
                max={perk.ranks}
                disabled={
                  statVal < perk.rank
                }
                onChange={e => props.updatePerks(perk, e.target.value, stat.stat)}
              />
            </div>
          )
        })}
      </section>
    )
  })
}

export default PerkInputs