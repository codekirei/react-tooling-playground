#! node_modules/.bin/babel-node

// modules
//---------------------------------------------------------
import path from 'path'
import express from 'express'
import firstOpenPort from 'first-open-port'
import webpack from 'webpack'
import makeConfig from './webpack.config'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'

// vars
//---------------------------------------------------------
const cwd = process.cwd()
const config = makeConfig()
const server = express()
const bundler = webpack(config)

// middleware
//---------------------------------------------------------
server.use(devMiddleware(bundler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))

server.use(hotMiddleware(bundler))

// routes
//---------------------------------------------------------
server.get('/', (req, res) => {
  res.sendFile(path.join(cwd, 'src', 'index.html'))
})

// launch
//---------------------------------------------------------
firstOpenPort(3000, 3100)
  .then(port => {
    server.listen(port, err => {
      if (err) console.error(err.stack)
      else console.info(`Listening at localhost:${port}`)
    })
  })
  .catch(err => {
    console.error('No ports available in specified range', err.stack)
  })

/* eslint no-console: 0 */
