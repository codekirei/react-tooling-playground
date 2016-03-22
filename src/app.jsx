import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root.jsx'
import './styles/index.css'

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(<Root />, rootEl)

if (module.hot) module.hot.accept()
render()
