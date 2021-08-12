const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, argv) => ({
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      { test: /\.html$/, use: 'html-loader' },
      {
        test: /\.js$/,
        use: 'babel-loader',
        ...(argv.mode === 'development' && {
          exclude: path.resolve(__dirname, 'node_modules'),
        }),
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            test: /\.module\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: { modules: true },
              },
            ],
          },
          { use: ['style-loader', 'css-loader'] },
        ],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            issuer: /\.css$/,
            type: 'asset/inline',
          },
          {
            type: 'asset/source',
          },
        ],
      },
      {
        test: /\.(png|jpe?g)$/,
        oneOf: [
          {
            test: /favicon.*\.(png|jpe?g)$/,
            type: 'asset/resource',
            generator: { filename: '[name][ext]' },
          },
          { test: /\/icons\/.*\.(png|jpe?g)$/, type: 'asset/inline' },
          { test: /\.(png|jpe?g)$/, type: 'asset/resource' },
        ],
      },
      { test: /\.(woff|woff2)$/, type: 'asset/resource' }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'test',
      template: './index.html.ejs',
    }),
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    injectClient: argv.mode === 'development',
    hot: false,
    liveReload: true,
    watchContentBase: true,
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
})
