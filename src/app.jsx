import React from 'react'
import { render } from 'react-dom'
import Root from './components/root/root.jsx'
import RedBox from 'redbox-react'

const rootEl = document.getElementById('root')
const renderApp = () => render(<Root />, rootEl)
const renderErr = err => render(<RedBox error={err} />, rootEl)

if (module.hot) {
  module.hot.accept()
  try {
    renderApp()
  } catch (err) {
    renderErr(err)
  }
}

renderApp()
