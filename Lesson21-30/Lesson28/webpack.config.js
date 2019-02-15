const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:"./src/index.tsx",
    mode:'development',
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.less/,
                use:['style-loader','css-loader','less-loader'],
            },
            {
                test:/\.tsx?$/,
                use:[
                    "ts-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}