/* eslint-disable */
const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './script.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },

    devtool: "inline-source-map",

    devServer: {

       static: { directory: path.resolve(__dirname, 'dist')}, port: 3035, open:true, hot:true
    },

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.(png|svg|jpg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
        },
        ]

    },

    plugins: [
        new HtmlWebpackPlugin({
        title: "English for Kids",
        filename: "index.html",
        template: path.resolve(__dirname, "./index.html")
    }),
    new CopyPlugin({
        patterns: [
            { from: 'assets/audio', to: './assets/audio' },
            { from: 'assets/img', to: './assets/img' },
        ],
    }),
]
  };
  /* eslint-disable */