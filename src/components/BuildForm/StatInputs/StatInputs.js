import React from 'react'

function StatInputs(props) {
  return props.state.stats.map(stat => {
    
    function handleDecrease(e) {
      e.preventDefault()
      props.decreaseStat(stat.index)
    }
    
    function handleIncrease(e) {
      e.preventDefault()
      props.increaseStat(stat.index)
    }

    return (
      <div className='stat-input' key={stat.index}>
        <label htmlFor={stat.title} className='tooltip'>
          <p className='tooltiptext'>{stat.des}</p>
          {stat.title.charAt(0).toUpperCase() + stat.title.slice(1)}:
        </label>
        <div>
          <button onClick={e => handleDecrease(e)} disabled={stat.value === 1}>-</button>
          <span>{stat.value}</span>
          <button onClick={e => handleIncrease(e)} disabled={stat.value === 10}>+</button>
        </div>
      </div>
    )
  })
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