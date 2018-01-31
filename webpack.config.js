var webpack=require('webpack');
var path=require('path');
var uglifyJsPlugin=webpack.optimize.UglifyJsPlugin;
var HtmlWebpackPlugin=require('html-webpack-plugin');
var autoprefixer=require('autoprefixer');
var extractTetxtWebpackPlugin=require('extract-text-webpack-plugin');
module.exports = {
    entry:'./src/index.js',
    output: {
        path: __dirname,
        filename: "bundle.js" ,
        publicPath: "/" 
    },
    module: {
        loaders: [
            { 
                test: /\.(css|less)$/, loader:extractTetxtWebpackPlugin.extract("style","css!less!postcss")
            },
            {
                test: /.js?$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0&presets[]=stage-1'],
                exclude: /node_modules/
            }
        ]
    },
};

