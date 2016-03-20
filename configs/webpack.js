import path from 'path'
import webpack from 'webpack'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'

const cwd = process.cwd()

export default {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(cwd, 'src', 'app.jsx'),
  ],
  output: {
    path: path.join(cwd, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  module: { loaders: [
    {
      test: /\.jsx?$/,
      include: path.join(cwd, 'src'),
      loader: 'babel',
      query: {
        cacheDirectory: true,
      },
    },
    {
      test: /\.css$/,
      // loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap']),
      loaders: ['style', 'css?sourceMap', 'postcss'],
    },
  ] },
  postcss: instance => [
    require('postcss-import')({
      addDependencyTo: instance,
    }),
    require('kirei-css'),
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('style.css', {
    //   allChunks: true,
    // }),
  ],
}
