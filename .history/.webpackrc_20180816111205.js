export default {
  publicPath: process.env.NODE_SSR === 'true' ? '/static/' : '/',
  extraBabelPlugins: [
    [
      'import', {
        libraryName: 'antd',
        style: "css",
      },
    ]
  ]
}
