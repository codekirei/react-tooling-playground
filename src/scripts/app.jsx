import React, { Component } from 'react'
import { render } from 'react-dom'

if (module.hot) module.hot.accept()

class App extends Component {
  render() { return (
    <div>
      <input></input>
      <div>hello world</div>
    </div>
  )}
}

render(<App />, document.getElementById('app'))
