const webpack = require("webpack");
const path = require("path");

module.exports = env => ({
  entry: "./src/index.ts",
  mode: env.production ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js",
    library: "zeroConfigWebpack",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
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
  plugins: []
});
