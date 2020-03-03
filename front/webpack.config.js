module.exports = {

    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/src/assets/bundle"
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    context: __dirname,

    module: {
        rules: [{
            test: /jsx?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                presets: ["@babel/preset-react", "@babel/env"]
            }
        }]
    },

    devtool: "source-map"
} 