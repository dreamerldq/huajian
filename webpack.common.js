const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryHtml = [
  'index',
  'noval',
];
const webpackConfig = {
  entry: {
    index: path.join(__dirname, '/src/pages/MainIndex/index.js'),
    noval: path.join(__dirname, '/src/pages/Noval/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          { loader: 'babel-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              minimize: true,
              importLoaders: 1,
              localIdentName: '[local]_[hash:base64:5]',
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
        ],
      },

    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx', 'less', 'css'],
  },
  devServer: {
    port: 7000,
    historyApiFallback: true,
  },
};
entryHtml.forEach((name) => {
  const plugin = new HtmlWebpackPlugin({
    filename: `${name}.html`,
    template: path.join(__dirname, 'public/index.html'),
    inject: true,
    chunks: [name],
  });
  webpackConfig.plugins.push(plugin);
});
module.exports = webpackConfig;
