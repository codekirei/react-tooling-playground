import React from 'react'
import { render } from 'react-dom'
import './Root.scss'
import Hello from '../Hello/Hello.jsx'

const Root = () => (
  <Hello />
)

export default Root

render(<Root />, document.getElementById('root'))
