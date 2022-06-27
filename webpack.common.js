const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPngquant = require('imagemin-pngquant')
// const ImageminSvgo = require('imagemin-svgo')
// const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')

const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader'
      }
    ]
  },
  stats: { children: false },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: './src/public/favicon.png'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/')
        }
      ]
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js')
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true
        }),
        ImageminPngquant({
          quality: [0.3, 0.5]
        })
        // ImageminSvgo()
      ]
    })
    // new ImageminWebpWebpackPlugin({
    //   config: [
    //     {
    //       test: /\.(jpe?g|png)/,
    //       options: {
    //         quality: 50
    //       }
    //     }
    //   ],
    //   overrideExtension: true
    // })
  ]
}
