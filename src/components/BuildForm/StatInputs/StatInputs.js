import React from 'react'
import './StatInputs.css'

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
        <label htmlFor={stat.title}>
          <div className='tooltip'>
            <span className='buttonish'>?</span>
            <p className='tooltiptext hidden'>{stat.des}</p>
          </div>
          {stat.title.charAt(0).toUpperCase() + stat.title.slice(1)}:
        </label>
        <div>
          <button className='stat-button buttonish' onClick={e => handleDecrease(e)} disabled={stat.value === 1}>-</button>
          <span className='stat-value'> {stat.value} </span>
          <button className='stat-button buttonish' onClick={e => handleIncrease(e)} disabled={stat.value === 10}>+</button>
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
