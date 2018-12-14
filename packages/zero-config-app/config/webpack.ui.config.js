const HtmlWebpackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");
const WebpackBar = require("webpackbar");

module.exports = env => ({
  entry: "./src/index.tsx",
  mode: env.production ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "ui.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true,
    port: 9000
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000
          }
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-react-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Config Pack",
      template: require("html-webpack-template"),
      appMountId: "root",
      inject: false
    }),
    new MonacoWebpackPlugin({
      languages: ["javascript", "json"],
      features: []
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar()
  ]
});
