console.log(process.env.NODE_SSR === "true");
console.log(bb)
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
