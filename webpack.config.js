const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/main/client.js'
    },
    output: {
        filename: '[name]/bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ["@babel/env",
                            {
                              "useBuiltIns": "entry",
                              targets: {browsers: [
                                  '>1%',
                                  'not ie 11',
                                  'not op_mini all'
                                ]}
                            }
                          ], "@babel/react"
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index']
        }),
      ],
}