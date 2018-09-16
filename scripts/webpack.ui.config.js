const HtmlWebpackPlugin = require("html-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./ui/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../dist/ui"),
    filename: "ui.bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist/ui"),
    hot: true,
    port: 9000
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
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
      template: require("html-webpack-template"),
      appMountId: "root"
    }),
    new MonacoWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
