const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin =  new HtmlWebPackPlugin({
                        template: "./src/index.html",
                        filename: "./index.html"
                    })

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png||jpg||gif)$/,
                use: {
                    loader: 'file-loader'
                }           
            }
        ]
    },
    plugins: [htmlPlugin]
}