const  path = require('path'),
    HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', ".css", ".scss"]
  },
  devServer: {
    historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /.tsx?$/,
        use: [
          { loader: 'ts-loader', options: { happyPackMode: true } }
        ],
        exclude: path.join(__dirname, '/node_modules'),
        include: path.join(__dirname, '/src'),
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'sass-loader'
        ]
      },
      {test: /\.(jpe?g|gif|png|svg)$/, loader: "file-loader?name=./images/[name].[ext]"},
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    })
  ]
};