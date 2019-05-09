import '@babel/polyfill'
import webpack from 'webpack'
import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'
import autoprefixer from 'autoprefixer'

module.exports = {
  devtool: false,
  entry: {
    main: ['@babel/polyfill', './src/index.js'],
    bundle: ['jquery', 'popper.js', 'bootstrap']
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel']
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [autoprefixer]
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
          'img-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      root: path.resolve(__dirname, './src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new CopyWebpackPlugin([
      { from: 'src/_assets/images', to: 'images' }
    ]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html'
    }),
    new LodashModuleReplacementPlugin({
      coercions: true
    })
  ],
  externals: {
    config: JSON.stringify({
      apiUrl: process.env.API_URL
    })
  }
}
