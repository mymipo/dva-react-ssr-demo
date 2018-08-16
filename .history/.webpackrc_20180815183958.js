export default {
  publicPath: '/static/',
  extraBabelPlugins: [
    [
      'import', {
        libraryName: 'antd',
        style: "css",
      },
    ]
  ]
}
