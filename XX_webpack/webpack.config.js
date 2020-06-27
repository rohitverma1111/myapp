
const path = require('path');

module.exports = {
    entry: './project/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test:/\.js$/
            },
            {
                use:['style-loader', 'css-loader'],
                test:/\.css$/
            }
        ]
    }
}