import React from 'react'

function StatInputs(props) {
  return props.state.stats.map(stat => 
    <div className='stat-input' key={stat.index}>
      <label htmlFor={stat.title}>{stat.title.toUpperCase()}:</label>
      <input 
        type='number' 
        id={stat.title} 
        name={stat.title} 
        onChange={e => {props.updateStats(stat.index, e.target.value)}}
        min='1' max ='10' 
        defaultValue='1' 
        required 
      />
    </div>
  )
}

StatInputs.defaultProps = {
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

export default StatInputs