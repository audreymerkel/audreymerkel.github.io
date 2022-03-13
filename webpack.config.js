const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: {
    home: './src/home'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin()
  ]
}