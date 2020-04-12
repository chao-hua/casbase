const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts',
            template: 'public/index.html',
        }
    },
    /* configureWebpack: (config) => {
        //入口文件
        config.entry.app = ['./examples/main.js'];
    }, */
    // webpack 配置
    chainWebpack: config => {
        // 相对路径名
        config.resolve.alias
            .set('@$', resolve('src'))
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
        // 打包文件带hash
        // config.output.filename('[name].[hash].js').end();
    },
    devServer: {
        port: '8081'
    }
}