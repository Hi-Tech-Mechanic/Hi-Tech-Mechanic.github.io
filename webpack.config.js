const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js',
        info: './js/old_index.js',
    },
    
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(mp4|mpeg|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'videos/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: 'index.html',
            inject: false,
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: './old_index.html',
            filename: 'old_index.html',
            inject: false,
            minify: false,
        }),
        new HtmlWebpackPlugin({
            template: './history.html',
            filename: 'history.html',
            inject: false,
            minify: false,
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "./images"),
                    to: path.resolve(__dirname, "dist/images")
                },
                {
                    from: path.resolve(__dirname, "favicon.png"),
                    to: path.resolve(__dirname, "dist")
                },
            ]
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        open: true,
    },

    // mode: "development",
    mode: "production",
}