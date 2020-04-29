import React from 'react'
import './Build.css'

export default function Build(props) {
  const {title, description, stats, required_level} = props.build

  let perks = []

  stats.forEach(s => {
    if (s.perks.length > 0) {
        return s.perks.map(p => perks.push(p))
    }
  })

  function renderPerkFields(stat) {
    if (stat.perks.length === 0) {
      return (<p>No active Perks to show!</p>)
    }

    return (
      <ul>
        {
          stat.perks.map(p => {
            return (
              <li>
                <p>{p.title} Rank {p.perk_rank}: {p.perk_description}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }

  function renderStatFields() {
    return (
      <ul>
        {stats.map(s => {
          return (
            <li key={s.id}>
              <h2>{s.title.charAt(0).toUpperCase() + s.title.slice(1)}: <span>{s.stat_value}</span></h2>
              {renderPerkFields(s)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <h2>{title}</h2>
      <p>Required Level: {required_level}</p>
      <p>{description}</p>
      <div className='build-box'>
        {renderStatFields()}
      </div>
    </>
  )
}

Build.defaultProps = {
  build: {
    stats: [],
    perks: []
  }
}
