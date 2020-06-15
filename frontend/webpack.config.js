const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  // 웹팩4에서 추가된 모드 옵션 development면 개발용, production이면 배포용
  // 배포용으로 변경하게 되면 알아서 최적화가 적용됨
  mode: 'production',
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    contentBase: './dist',
    proxy: {
      '/api': {
        target: 'http://localhost:8090' // api 서버
      }
    }
  },
  entry: {
    ['/static/js/' + 'bundle']: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: __dirname + '../../src/main/resources',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.s[a|c]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '/static/images/[hash].[ext]',
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({ template: './public/index.html', filename: 'index.html' }),
    // new HtmlWebPackPlugin({
    //   template: './public/index.html', // public/index.html 파일을 읽는다.
    //   filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
    // }),
    new MiniCssExtractPlugin({ filename: '/static/css/style.css' })
  ]
};
