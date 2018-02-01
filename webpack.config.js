const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dev = process.env.NODE_ENV === "development";
var CompressionPlugin = require("compression-webpack-plugin");

let config = {
    devtool: dev ? 'inline-source-map' : false,
    entry : './public/app.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react-hmre'],
                }
            },
            {
                test: [/\.scss$/,/\.css$/],
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    { loader: 'file-loader' }
                ]
            }
        ]
    },
    output: {
        path : require("path").resolve('./public/dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: dev,
        }),
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.module.rules[0].query.presets.splice(-1);
    config.plugins.push(new UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new CompressionPlugin());
} else {
    config.plugins.push(new webpack.NamedModulesPlugin());
    config.plugins.push(new webpack.NoEmitOnErrorsPlugin ());
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.entry = ['webpack-hot-middleware/client', config.entry];
}

module.exports = config;