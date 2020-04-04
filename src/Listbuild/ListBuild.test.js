import React from 'react'
import ReactDOM from 'react-dom'
import ListBuild from './ListBuild'

describe('ListBuild component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <ListBuild />,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})