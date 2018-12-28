module.exports = {
  // https://cli.vuejs.org/config/#outputdir
  baseUrl: '/frontend-sprint',
  // outputDir: 'docs',
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
