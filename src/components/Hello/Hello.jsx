import React, { PropTypes as type } from 'react'
import './Hello.css'

const Hello = ({ text = 'hello world!' }) => (
  <div className="hello">{ text }</div>
)

Hello.propTypes = {
  text: type.string,
}

export default Hello
