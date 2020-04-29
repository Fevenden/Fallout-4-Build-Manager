import React from 'react'
import ReactDOM from 'react-dom'
import ViewBuild from './ViewBuild'
import { BrowserRouter } from 'react-router-dom'

describe('ViewBuild component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <ViewBuild />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})