const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require('path')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: "html-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: './resources/imgs',
                            name: '[name].[ext]'
                        }
                    },
                ]
            }
           
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}

// "babel-core": "^6.26.3",
// "babel-loader": "^7.1.4",
// "babel-plugin-transform-class-properties": "^6.24.1",
// "babel-preset-env": "^1.7.0",
// "babel-preset-react": "^6.24.1",
// "css-loader": "^0.28.11",
// "file-loader": "^1.1.11",
// "html-loader": "^0.5.5",
// "html-webpack-plugin": "^3.2.0",
// "mini-css-extract-plugin": "^0.4.0",
// "react": "^16.3.2",
// "react-dom": "^16.3.2",
// "style-loader": "^0.21.0",
// "webpack": "^4.8.3",
// "webpack-cli": "^2.1.3",
// "webpack-dev-server": "^3.1.4"