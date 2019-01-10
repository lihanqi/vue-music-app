// vue.config.js

const path = require('path');
function resolve(dir) {
    console.log(path.join(__dirname, dir))
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
                'src': resolve('src'),
                'common': resolve('src/common'),
                'components': resolve('src/components'),
                'api': resolve('src/api'),
                'base': resolve('src/base')
            }
        }
    }
}