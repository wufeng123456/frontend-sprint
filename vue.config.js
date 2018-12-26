module.exports = {
  chainWebpack: config => {
    // https://github.com/neutrinojs/webpack-chain
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          return options
        })
  }
}
