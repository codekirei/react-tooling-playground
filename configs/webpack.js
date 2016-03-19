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
    },
    {
      test: /\.scss$/,
      // loader: ExtractTextPlugin.extract(['css?sourceMap', 'sass?sourceMap']),
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
    },
  ] },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('style.css', {
    //   allChunks: true,
    // }),
  ],
}
