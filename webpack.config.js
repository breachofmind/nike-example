const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const STYL_LOADERS = [
    'css-loader',
    'postcss-loader',
    'stylus-loader'
];
const CSS_LOADERS = [
    'style-loader',
    'css-loader',
    'postcss-loader',
];
const JS_LOADERS = [
    'babel-loader'
];

module.exports = {
    entry: path.resolve(__dirname, 'src/js/main.js'),
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {test: /\.css/, use: CSS_LOADERS.map(toLoader)},
            {test: /\.styl/, use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: STYL_LOADERS
            })},
            {test: /\.js/, use: JS_LOADERS.map(toLoader)},
            {test: /\.jsx/, use: JS_LOADERS.map(toLoader)},
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],
    devtool: "cheap-eval-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        compress: true,
        port:8081,
        hot: true
    }
};

/**
 * Convert the loader string names to objects webpack conf can use.
 * @param name {string}
 * @returns {object}
 */
function toLoader(name)
{
    return {loader: name}
};
