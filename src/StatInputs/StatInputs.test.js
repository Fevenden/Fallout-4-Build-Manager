import React from 'react'
import ReactDOM from 'react-dom'
import StatInputs from './StatInputs'

describe('StatInput Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <StatInputs />, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})