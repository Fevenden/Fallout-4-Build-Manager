import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import App from './App'

describe('react app', () => {
  it('renders without crashing', () => {
   const div = document.createElement('div')
   ReactDOM.render(<App />, div)
   ReactDOM.unmountComponentAtNode(div)
  })
})