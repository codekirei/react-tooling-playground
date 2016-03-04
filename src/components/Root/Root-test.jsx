import './Root.jsx'

exports['Root component'] = {

  'bind to #root': () => {
    expect(
      Array.prototype.slice.call(
        document.getElementById('root').children
      ).length
    ).to.be.above(0)
  },

}

/* global expect:false */
