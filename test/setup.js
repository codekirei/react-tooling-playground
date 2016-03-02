// #jsxthings
require('babel-register')()
require('ignore-styles')

// make a DOM for Node to play with
const jsdom = require('jsdom').jsdom
global.document = jsdom('')
global.window = document.defaultView
global.navigator = { userAgent: 'node.js' }
Object.keys(document.defaultView).forEach(prop => {
  if (typeof global[prop] === 'undefined') {
    global[prop] = document.defaultView[prop]
  }
})

// enable enzyme assertions
const chai = require('chai')
const chaiEnzyme = require('chai-enzyme')
chai.use(chaiEnzyme())
global.expect = chai.expect
