import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root/Root.jsx'
import RedBox from 'redbox-react'

const rootEl = document.getElementById('root')
const renderRoot = () => render(<Root />, rootEl)
const renderErr = err => render(<RedBox error={err} />, rootEl)

if (module.hot) {
  module.hot.accept()
  try {
    renderRoot()
  } catch (err) {
    renderErr(err)
  }
}

// renderRoot()
