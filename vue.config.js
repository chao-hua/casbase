const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.ts',
            template: 'examples/index.html',
            filename: 'index.html'
        }
    },
    // webpack 配置
    chainWebpack: config => {
        // 相对路径名
        config.resolve.alias
            .set('build', resolve('build'))
            .set('docs', resolve('docs'))
            .set('examples', resolve('examples'))
            .set('lib', resolve('lib'))
            .set('packages', resolve('packages'));
        // eslint 自动修复
        config.module
            .rule('eslint')
            .use('eslint-loader')
            .loader('eslint-loader')
            .tap(options => {
                options.fix = true;
                return options;
            });
    },
    devServer: {
        port: '8081'
    }
}