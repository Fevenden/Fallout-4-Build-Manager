import React from 'react'
import './Build.css'

export default function Build(props) {
  return (
    <>
      <h2>{props.build.title}</h2>
      <p>{props.build.description}</p>
      <div className='build-box'>
        <section id='build-stats' className='box'>
          <ul>
            {props.build.stats.map(stat => (
              <li key={stat.title}>{stat.title}:{stat.value}</li>
              ))}
          </ul>
        </section>
        <section id='build-perks' className='box'>
          <ul>
            {props.build.perks.map(perk => 
            <li key={perk}>{perk}</li>
            )}
          </ul>
      </section>
      </div>
      <div>
        <button>Back</button>
        <button>Edit</button>
        <button>Delete</button>
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