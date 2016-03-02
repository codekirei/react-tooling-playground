import React from 'react'
import { shallow } from 'enzyme'
import Hello from './Hello.jsx'

describe('Hello component', () => {
  // shared vars
  let component

  // hooks
  before(() => {
    component = shallow(<Hello />)
  })

  // cases
  it('element', () =>
    expect(component).to.have.tagName('div')
  )

  it('class', () =>
    expect(component).to.have.className('hello')
  )

  it('text', () =>
    expect(component).to.have.text('hello world!')
  )
})

/* global expect:false */
