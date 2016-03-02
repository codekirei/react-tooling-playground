import React from 'react'
import { render } from 'react-dom'
import './app.scss'
import Hello from './components/Hello/Hello.jsx'

const App = () => (
  <Hello />
)

render(<App />, document.getElementById('app'))
