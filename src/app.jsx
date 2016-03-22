import React from 'react'
import { render } from 'react-dom'
import Root from './components/root.jsx'
import RedBox from 'redbox-react'
import './styles/index.css'

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
