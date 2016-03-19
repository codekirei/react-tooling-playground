import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

export default bundler => ({
  open: false,
  server: {
    baseDir: 'src',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: '/',
        stats: {
          colors: true,
        },
        noInfo: true,
      }),
      webpackHotMiddleware(bundler),
    ],
  },
  files: [
    'src/index.html',
  ],
})
