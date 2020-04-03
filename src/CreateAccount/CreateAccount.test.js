import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CreateAccount from './CreateAccount'

describe('CreateAccount component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <BrowserRouter>
        <CreateAccount />
      </BrowserRouter>,
      div
    ),
    ReactDOM.unmountComponentAtNode(div)
  })
})
