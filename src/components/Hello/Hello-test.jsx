import React from 'react'
import { shallow } from 'enzyme'
import Hello from './Hello.jsx'

let component

exports['Hello component'] = {

  before: () => {
    component = shallow(<Hello />)
  },

  element: () => expect(component).to.have.tagName('div'),
  className: () => expect(component).to.have.className('hello'),
  text: () => expect(component).to.have.text('hello world!'),

}

/* global expect:false */
