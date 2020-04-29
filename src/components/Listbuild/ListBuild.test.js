import React from 'react'
import ReactDOM from 'react-dom'
import ListBuild from './ListBuild'
import { BrowserRouter } from 'react-router-dom'

describe('ListBuild component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <ListBuild />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})