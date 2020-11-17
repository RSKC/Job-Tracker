const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  // devServer: {
  //   publicPath: '/build/',
  //   proxy: {
  //     '/': 'http:localhost:3000',
  //   },
  //   compress: true,
  //   disableHostCheck: true,
  // },
  devServer: {
    contentBase: path.join(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

