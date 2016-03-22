// test utils ----------------------------------------------

import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

// test cases ----------------------------------------------

import Root from '../../src/components/root.jsx'

exports['Root component'] = {
  'render hello': () => {
    expect(shallow(<Root />).shallow()).to.have.text('hello world!')
  },
}
