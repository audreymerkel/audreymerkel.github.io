const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    home: './src/home'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./public/dist')
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