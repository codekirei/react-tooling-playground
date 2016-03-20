// test utils ----------------------------------------------

import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

// test cases ----------------------------------------------

import Hello from './hello.jsx'

const component = shallow(<Hello />)

exports['Hello component'] = {
  element: () => {
    expect(component).to.have.tagName('div')
  },
  className: () => {
    expect(component).to.have.className('hello')
  },
  'text -- default': () => {
    expect(component).to.have.text('hello world!')
  },
  'text -- custom': () => {
    expect(shallow(<Hello text="foo" />)).to.have.text('foo')
  },
}
