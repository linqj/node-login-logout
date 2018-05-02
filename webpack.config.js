var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // context:
    devtool: "eval-source-map",
    entry: {
        //多个页面
        //在webpack2中写路径一定要加__dirname,main自动被定义为公共页，在其他页面引用时一定要引入该页面
        main: __dirname + '/src/main.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        publicPath:'/' //上线时使用
    },

    module: {
        rules: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]

    },
    plugins: [
        new htmlWebpackPlugin({//将打包后的js文件自动引入template中的文件中
            template: 'src/html/index.html',//模板指向根目录下的html
        }),

    //

    ]

}