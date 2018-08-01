const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const entryHtml = [
    'index',
    'noval'
]

// const htmlWebpackPlugin = new HtmlWebpackPlugin({
//     template: path.join(__dirname, "public/index.html"),
//     filename: "./index.html"
// });
const webpackConfig = {
    entry: {
        index: path.join(__dirname, "/src/pages/MainIndex/index.js"),
        noval: path.join(__dirname, "/src/pages/Noval/index.js"),
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]_bundle.js',
        publicPath: '/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {loader: 'babel-loader'}
                ],
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader'},
                    {loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true,
                        camelCase: true,
                        minimize: true,
                        importLoaders: 1,
                        localIdentName: "[local]_[hash:base64:5]"
                    }
                    },
                    { loader: 'less-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            
        ]
    },
    plugins: [],
    // plugin: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx", "less", "css"]
    },
    devServer: {
        port: 7000,
        historyApiFallback: true,
    }
}
entryHtml.forEach((name) => {
    const plugin = new HtmlWebpackPlugin({
        filename: name + '.html',
        template: path.join(__dirname, "public/index.html"),
        inject: true,
        chunks: [name]
    });
    webpackConfig.plugins.push(plugin);
})
module.exports = webpackConfig