const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "amazon-connect-chat.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          // Don't waste time on Gzipping the cache
          cacheCompression: false
        }
      }
    ]
  },

  devServer: {
    compress: false,
    hot: true,
    static: {
      directory: path.resolve(__dirname, "showcase"),
      watch: true
    }
  }
};
