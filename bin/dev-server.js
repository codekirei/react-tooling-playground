'use strict'

// import
//----------------------------------------------------------
const devMiddleware = require('webpack-dev-middleware')
const express       = require('express')
const firstOpenPort = require('first-open-port')
const hotMiddleware = require('webpack-hot-middleware')
const path          = require('path')
const webpack       = require('webpack')

// local
const conf = require('./conf')

// logic
//----------------------------------------------------------
const cwd = process.cwd()

function serve(port) {

  // instantiation
  const app = express()
  const bundler = webpack(conf.webpack)

  // middlware
  app.use(devMiddleware(bundler, conf.devMiddleware))
  app.use(hotMiddleware(bundler))

  // routing
  app.get('/', (req, res) => res.sendFile(path.join(cwd, 'index.html')))

  // serve and handle events
  const server = app.listen(port)
  server.on('listening', () => {
    console.log('serving on http://localhost:%s', port)
  })
}

firstOpenPort(3000)
  .then(serve)
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
