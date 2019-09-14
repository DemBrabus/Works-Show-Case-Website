//
//Webpack Development
//

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // Identify each entry point by assigning a name and its path
    entry: {
        index: './src/Page-Index/index.js',
        about: './src/Page-About/about.js',
        contact: './src/Page-Contact/contact.js'
    },

    // Select a Port you would like to work out of, add additional preferences
    devServer: {
        port: 8080
    },

    module: {
        rules: [
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
                    'style-loader',
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
            //Create a dynamic Html file from a template, inject an entry point, 
        new HtmlWebpackPlugin({
            template: './src/Page-Index/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/Page-About/about.html',
            inject: true,
            chunks: ['about'],
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/Page-Contact/contact.html',
            inject: true,
            chunks: ['contact'],
            filename: 'contact.html'
        }),
    ],
};