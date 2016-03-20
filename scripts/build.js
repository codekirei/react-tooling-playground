#! node_modules/.bin/babel-node

import path from 'path'
import fs from 'fs-extra'
import rimraf from 'rimraf'
import webpack from 'webpack'
import webpackConfig from '../configs/webpack'

const conf = webpackConfig('production')

const target = conf.output.path
const html = {
  src: path.join('src', 'index.html'),
  dest: path.join(target, 'index.html'),
}

const cleanAndExit = () =>
  rimraf(target, err => {
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
  return fs.copy(html.src, html.dest, e => e ? handle(e) : process.exit(0))
})

/* eslint no-console: 0 */
