'use strict'

// modules
//----------------------------------------------------------
const devMiddleware = require('webpack-dev-middleware')
const express       = require('express')
const firstOpenPort = require('first-open-port')
const p             = require('path')
const webpack       = require('webpack')
// hot = require 'webpack-hot-middleware'

// local
const conf = require('./conf')

// logic
//----------------------------------------------------------
const cwd = process.cwd()

function serve(port) {
  const app = express()
  const bundler = webpack(conf.webpack)
  app.use(devMiddleware(bundler, conf.devMiddleware))
  app.get('/', (req, res) => res.sendFile(p.join(cwd, 'index.html')))

  const server = app.listen(port)
  server.on('listening', () => {
    console.log(`serving on http://localhost:${port}`)
  })
}

firstOpenPort(3000)
  .then(serve)
  .catch(err => console.error(err.stack))
