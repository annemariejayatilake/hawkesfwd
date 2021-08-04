const path = require('path');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    devServer: {
        hot: true,
        compress: true,
    },
    // no need to restart webpack all the time so
    watch: true,
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
