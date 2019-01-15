const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'main.js' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: './resources/imgs',
                            name: '[name].[ext]'
                        } 
                    }
                ]
            },
            {
                test: /\.html$/,
                use: { loader: 'html-loader' }
            }
        ]
    },
    "plugins": [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    "devServer": {
        proxy: [{
            context: ["/"],
            target: "http://localhost:6000"
        }]
    }
}