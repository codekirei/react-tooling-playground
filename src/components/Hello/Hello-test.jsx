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
  'text -- default': () => expect(component).to.have.text('hello world!'),
  'text -- custom': () => {
    expect(shallow(<Hello text="foo" />)).to.have.text('foo')
  },

}

/* global expect:false */
