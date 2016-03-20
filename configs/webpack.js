import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin'

const cwd = process.cwd()

// entry and output
//------------------------------------------------------------------------------
function entry(env) {
  const entries = []
  if (env === 'dev') entries.push('webpack-hot-middleware/client')
  entries.push(path.resolve(cwd, 'src', 'app.jsx'))
  return entries
}

const output = {
  path: path.join(cwd, 'dist'),
  filename: 'app.js',
  publicPath: '/',
}

// loaders
//------------------------------------------------------------------------------
function babelLoader(env) {
  const loader = {
    test: /\.jsx?$/,
    include: path.join(cwd, 'src'),
    loader: 'babel',
  }
  if (env === 'dev') loader.query = { cacheDirectory: true }
  return loader
}

function cssLoader(env) {
  const loader = { test: /\.css$/ }
  if (env === 'dev') loader.loaders = ['style', 'css?sourceMap', 'postcss']
  else loader.loaders = ['style/url', extract(['css', 'postcss'])]
  return loader
}

const postcss = instance => [
  require('postcss-import')({ addDependencyTo: instance }),
  require('kirei-css'),
]

const loaders = env => [babelLoader(env), cssLoader(env)]

// plugins
//------------------------------------------------------------------------------
function plugins(env) {
  const pluginAr = [new webpack.optimize.OccurenceOrderPlugin()]
  if (env === 'dev') pluginAr.push(new webpack.HotModuleReplacementPlugin())
  else {
    pluginAr.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('style.css', { allChunks: true })
    )
  }
  return pluginAr
}

// config
//------------------------------------------------------------------------------
export default (env = 'dev') => ({
  output,
  postcss,
  entry: entry(env),
  devtool: env === 'dev' ? 'cheap-module-eval-source-map' : false,
  noInfo: true,
  module: { loaders: loaders(env) },
  plugins: plugins(env),
})
