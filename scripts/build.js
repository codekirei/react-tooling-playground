#! node_modules/.bin/babel-node

import rimraf from 'rimraf'
import webpack from 'webpack'
import webpackConfig from '../configs/webpack'

const conf = webpackConfig('production')

const cleanAndExit = () =>
  rimraf(conf.output.path, err => {
    if (err) console.error(err)
    return process.exit(1)
  })

const handle = err => {
  console.error(err)
  return cleanAndExit()
}

webpack(conf).run((err, stats) => {
  if (err) return handle(err)
  const jsonStats = stats.toJson()
  if (jsonStats.errors.length) return handle(jsonStats.errors[0])
  return process.exit(0)
})

/* eslint no-console: 0 */
