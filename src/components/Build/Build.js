import React from 'react'
import './Build.css'

export default function Build(props) {
  const {title, description, stats, required_level} = props.build

  let perks = []

  stats.forEach(s => {
    const statPerks = props.perks.filter(p => p.stat === s.title)
    if (s.perks.length > 0) {
      return s.perks.map(p => perks.push(p))
    }
  })

  function renderPerkFields(stat) {
    if (stat.perks.length === 0) {
      return (<p>No active Perks to show!</p>)
    }

    return (
      <ul className='buildPerkList'>
        {
          stat.perks.map(p => {
            const perkImg = props.perks.filter(pe => pe.stat === p.stat_title).map(perks => 
              perks.perks.filter(perk => perk.name === p.title)[0].img
            )

            return (
              <li className='activePerk'>
                <img src={perkImg} alt={`${p.title} icon`} className='perkImg' />
                <p className='perkLabel'>{p.title}</p>
                <p className='perkLabel'>rank: {p.perk_rank}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }

  function renderStatFields() {
    return (
      <ul className='buildStats'>
        {stats.map(s => {
          return (
            <li key={s.id}>
              <div className='statValue'>
                <h2>{s.title.charAt(0).toUpperCase() + s.title.slice(1)}: <span>{s.stat_value}</span></h2>
              </div>
              {renderPerkFields(s)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <section className='container'>
      <h2>{title}</h2>
      <p>Required Level: {required_level}</p>
      <p>{description}</p>
      <div className='build-box'>
        {renderStatFields()}
      </div>
    </section>
  )
}

Build.defaultProps = {
  build: {
    stats: [],
    perks: []
  }
}
