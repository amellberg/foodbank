const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
   app: path.join(__dirname, "app"),
   dist: path.join(__dirname, "dist")
};

module.exports = {
   // Entries have to resolve to files! They rely on Node
   // convention by default so if a directory contains *index.js*,
   // it resolves to that.
   entry: {
      app: PATHS.app
   },

   mode: "development",

   output: {
      path: PATHS.dist,
      filename: "[name].js"
   },

   plugins: [
      new HtmlWebpackPlugin({
         title: "FoodBank"
      }),
   ],

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
         },
         {
            test: /\.css$/,
            loader: "style-loader!css-loader"
         }
      ]
   },

   devServer: {
      // Output only on errors or when new compilation happens
      stats: "errors-only",

      // Parse host and port from env to allow customization
      host: process.env.HOST,  // Defaults to `localhost`
      port: process.env.PORT,  // Defaults to 8080

      // Show overlay compile errors/warnings in browser
      overlay: {
         warnings: true,
         errors: true
      }
   }
};
