const path = require('path')
const htmlWebpack = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /.css$/, use: ['style-loader', 'css-loader'] },
            { test: /.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /.scss$/, include: '/src/', use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /.(png|gif|jpg|jpeg)$/, use: ['url-loader'] },
            { test: /.(svg|eot|ttf|woff|woff2)$/, use: ['url-loader'] },
            { test: /.vue$/, use: 'vue-loader'}
        ]
    },
    plugins: [
        new htmlWebpack({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
}