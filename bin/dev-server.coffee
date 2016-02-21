# ----------------------------------------------------------
# modules
# ----------------------------------------------------------

p = require 'path'
express = require 'express'
webpack = require 'webpack'
devMiddleware = require 'webpack-dev-middleware'
# hot = require 'webpack-hot-middleware'

# local
conf = require './conf'

# ----------------------------------------------------------
# logic
# ----------------------------------------------------------

cwd = process.cwd()
app = express()
bundler = webpack conf.webpack

app.use devMiddleware bundler, conf.devMiddleware

app.get '/', (req, res) ->
  res.sendFile p.join cwd, 'index.html'

app.listen 3000, (err) ->
  if err then console.log err
  console.log 'serving at http://localhost:3000'
