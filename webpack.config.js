var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  stats: {
    colors: true,
    modules: false,
    chunkModules: false,
    chunks: false
  },
  devServer: {
    contentBase: './public',
    hot: true,
    stats: {
      colors: true,
      modules: false,
      chunkModules: false,
      chunks: false
    },
    proxy: {
      '/**': {
        bypass: function(req, res, opt) {
          if (/\/(dist)/.test(req.path)) {
            return req.path;
          }
          return '/';
        }
      }
    }
  }
};
