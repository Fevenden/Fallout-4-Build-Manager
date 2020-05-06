import React, { Fragment } from 'react'
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
      <Fragment key={`${stat.title}-fragment`}>
        <div className='stat-input'>
          <span className='buttonish' onClick={e => props.toggleTooltip(e, stat.title)}>?</span>
          <div id={`${stat.title}-tooltip`} className='tooltiptext hidden'>
            <p>{stat.des}</p>
            <button type='button' className='buttonish' onClick={e => props.toggleTooltip(e, stat.title)}>Close</button>
          </div>
          <label htmlFor={stat.title}>
            {stat.title.charAt(0).toUpperCase() + stat.title.slice(1)}:
          </label>
          <div>
            <button className='stat-button buttonish' onClick={e => handleDecrease(e)} disabled={stat.value === 1}>-</button>
            <span className='stat-value'> {stat.value} </span>
            <button className='stat-button buttonish' onClick={e => handleIncrease(e)} disabled={stat.value === 10}>+</button>
          </div>
        </div>
      </Fragment>
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
