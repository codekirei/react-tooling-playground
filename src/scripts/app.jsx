import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() { return (
    <div>
      <input></input>
      <div>hello world!</div>
    </div>
  )}
}

render(<App />, document.getElementById('app'))
