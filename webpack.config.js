const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './js/index.js',

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./images"),
                    to: path.resolve(__dirname, "dist/images")
                }
            ]
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        open: true,
    },

    mode: "development",
}