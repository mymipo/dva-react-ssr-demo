export default {
  publicPath: process.env.NODE_SSR === 'true' ? '/static/' : '/',
  html: {
    template: `${__dirname}/src/index.ejs`,
    filename: './index.html'
  },
  extraBabelPlugins: [
    [
      'import', {
        libraryName: 'antd',
        style: "css",
      },
    ]
  ]
}
