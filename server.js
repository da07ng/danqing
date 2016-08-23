var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry.app.unshift('webpack-dev-server/client?http://localhost:3000', 'webpack/hot/dev-server');

config.plugins.push(new webpack.HotModuleReplacementPlugin());

var proxy = {
  '/api/*': 'http://localhost:5000'
};

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  proxy: proxy,
  stats: {
    colors: true
  }
});

server.listen(3000, '0.0.0.0', function (error) {
  if (error) {
    console.log(error);
  }

  console.log('Listening at localhost:3000');
});
