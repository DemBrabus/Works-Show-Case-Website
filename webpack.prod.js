//
//Webpack Production
//

const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const buildPath = path.resolve(__dirname, 'dist');


module.exports = {

    // Determine method of mapping 
    devtool: 'source-map',

    // Identify each entry point by assigning a name and its path
    entry: {
        index: './src/Page-Index/index.js',
        about: './src/Page-About/about.js',
        contact: './src/Page-Contact/contact.js'
    },

    // Create hashed output files and place them in generated 'dist' folder
    output: {
        filename: '[name].[hash:20].js',
        path: buildPath
    },

    module: {
        rules: [
            {   // Minimize Html files
                test: /\.html$/,
                use: ["html-loader"]
            },

            {   // +ES6 Transpiler for older browsers
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },

            {   //Styling - SASS
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {   // Hash all image files and bundles in an imgs file
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            },
        ]
    },

    plugins: [
        //Deletes previous production build on new build command (Currently Not Working??)
        // new CleanWebpackPlugin(buildPath),

        //Create a dynamic Html file from a template, inject an entry point,
        new HtmlWebpackPlugin({
            template: './src/Page-Index/index.html',
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html',
            minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                }
        }),
        new HtmlWebpackPlugin({
            template: './src/Page-About/about.html',
            inject: 'body',
            chunks: ['about'],
            filename: 'about.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/Page-Contact/contact.html',
            inject: 'body',
            chunks: ['contact'],
            filename: 'contact.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            }
        }),

        //Creates a separate CSS file in build bundle
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        })
    ],

    optimization: {
        minimizer: [

            //Compiles and minifies JS files
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),

            // Minimizes CSS assets
            new OptimizeCssAssetsPlugin({})
        ]
    }



}