const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    target: 'node',
    entry: [path.resolve(__dirname, "src", "index.js"),
            path.resolve(__dirname, "src", "js", "components", "LandingPage", "LandingPage.jsx"),
            path.resolve(__dirname, "src", "js", "components", "Home", "Home.js"),
            path.resolve(__dirname, "src", "js", "components", "Community", "Community.jsx"),
            path.resolve(__dirname, "src", "js", "components", "Resources", "Resources.jsx"),
            path.resolve(__dirname, "src", "js", "components", "AccountSettings", "AccountSettings.jsx"),
            path.resolve(__dirname, "src", "js", "components", "Calendar", "Calendar.jsx"),
            path.resolve(__dirname, "src", "js", "components", "Calendar", "Days.jsx"),
            path.resolve(__dirname, "src", "js", "components", "Home", "Event.jsx"),
            path.resolve(__dirname, "src", "js", "components", "Home", "Posts.jsx"),
            path.resolve(__dirname, "src", "js", "components", "Home", "Post.jsx")
            ],
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "bundle.js",
        publicPath: "/"
    }, 
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          { 
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
       ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
        ]
    },
    mode: "development",
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
    ],
    devServer: {
        contentBase: "./src",
        hot: true,
        historyApiFallback: true
    }
};