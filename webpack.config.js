const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackLiveReloadPlugin = require('html-webpack-live-reload-plugin')

const PATH_SRC = path.resolve(__dirname, 'src')
const DIST_SRC = path.resolve(__dirname, 'dist')

module.exports = {
    entry: path.resolve(PATH_SRC, 'index.js'),
    output: {
        path: DIST_SRC,
        filename: 'index.min.js',
        publicPath: 'auto',
    },
    mode: 'development',
    devServer: {},
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Learn Effector',
            template: path.resolve(PATH_SRC, 'index.html')
        }),
        new HtmlWebpackLiveReloadPlugin(),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
}
