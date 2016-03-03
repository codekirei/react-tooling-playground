import React from 'react'
import { render } from 'react-dom'
import './Root.scss'
import Hello from '../Hello/Hello'

const Root = () => (
  <Hello />
)

render(<Root />, document.getElementById('root'))

// vim: ft=javascript.jsx :
