#! node_modules/.bin/babel-node

import path from 'path'
import fs from 'fs'
import rimraf from 'rimraf'
import webpack from 'webpack'
import webpackConfig from '../configs/webpack'
import { jsdom, serializeDocument as serialize } from 'jsdom'
import { minify } from 'html-minifier'

const conf = webpackConfig('production')

const html = {
  src: path.join('src', 'index.html'),
  dest: path.join(conf.output.path, 'index.html'),
}

const minifyOpts = {
  collapseWhitespace: true,
  removeTagWhitespace: true,
}

const cleanAndExit = () =>
  rimraf(conf.output.path, err => {
    if (err) console.error(err)
    return process.exit(1)
  })

const handle = err => {
  console.error(err)
  return cleanAndExit()
}

const writeHtml = data => fs.writeFile(html.dest, data, err => {
  if (err) return handle(err)
  return process.exit(0)
})

const buildHtml = assets =>
  fs.readFile(html.src, 'utf8', (err, data) => {
    if (err) return handle(err)
    const document = jsdom(data)
    assets.forEach(asset => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = `/${asset}`
      document.head.appendChild(link)
    })
    return writeHtml(minify(serialize(document), minifyOpts))
  })

webpack(conf).run((err, stats) => {
  if (err) return handle(err)
  const jsonStats = stats.toJson()
  if (jsonStats.errors.length) return handle(jsonStats.errors[0])
  const assets = jsonStats.assets
    .map(asset => asset.name)
    .filter(name => path.extname(name) === '.css')
  return buildHtml(assets)
})

/* eslint no-console: 0 */
