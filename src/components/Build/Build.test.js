import React from 'react'
import ReactDOM from 'react-dom'
import Build from './Build'

describe('Build component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Build />,
      div
    )
  })
}) 