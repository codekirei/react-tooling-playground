import React from 'react'
import { render } from 'react-dom'
// import './style.css'
import './style.scss'

const App = () => (
  <div>
    <div className="hello">hello world!</div>
  </div>
)

render(<App />, document.getElementById('app'))
