import React from 'react'
import ReactDOM from 'react-dom'
import PerkInputs from './PerkInputs'

describe('PerkInputs componet', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <PerkInputs />, div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})