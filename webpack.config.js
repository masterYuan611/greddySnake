const path = require('path')

const HTMLWebpackPlgin = require('html-webpack-plugin')

// webpack中的配置信息
module.exports = {
    entry: "./src/index.ts",
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    mode: 'development',
    // 指定webpack打包时要使用的模块
    module: {
        rules: [
            {
                test: /\.ts$/,
                // 要使用的loader
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env",
                        {
                            targets: {
                                // "chorme": "88"
                            },
                            "corejs": "3",
                            "useBuiltIns": "usage"
                        }]]
                    }
                },"ts-loader"],
                exclude: /node-modules/
            }, {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            }
        ]
    },
    // 配置webpack插件
    plugins: [
      new HTMLWebpackPlgin({
        title: '这是一个自定义的title',
        filename: 'index.html',
        template: './src/index.html'
      }),
    ],
    // 用来设置引用模块
    resolve: {
      extensions: ['.ts', '.js']
    }

}