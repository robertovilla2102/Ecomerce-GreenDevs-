module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: __dirname + "/../back/public/bundle",
  },
  devServer: {
    inline: false,
    contentBase: "./dist",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  context: __dirname,

  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/env"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devtool: "source-map",
};
