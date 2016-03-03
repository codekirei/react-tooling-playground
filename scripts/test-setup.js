import { jsdom } from 'jsdom'
global.document = jsdom('')
global.window = document.defaultView
global.navigator = { userAgent: 'node.js' }
Object.keys(document.defaultView).forEach(prop => {
  if (typeof global[prop] === 'undefined') {
    global[prop] = document.defaultView[prop]
  }
})

import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
global.expect = chai.expect
