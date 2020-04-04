import React from 'react'
import ReactDOM from 'react-dom'
import ViewBuild from './ViewBuild'

describe('ViewBuild component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ViewBuild />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})