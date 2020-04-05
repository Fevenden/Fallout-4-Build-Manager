import React from 'react'
import './Build.css'

export default function Build(props) {
  console.log(props.build)
  return (
    <div>
      <h2>{props.build.title}</h2>
      <ul>
        {props.build.stats.map(stat => (
          <li key={stat.title}>
            <span>{stat.title}:</span>
            <br/>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
      <ul>
        {props.build.perks.map(perk => 
          <li key={perk}>{perk}</li>
        )}
      </ul>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
Build.defaultProps = {
  build: {}
}