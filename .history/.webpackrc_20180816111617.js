console.log(process.env.NODE_SSR === 'true' ? '/static/' : '/');
console.log(bb)
export default {
  publicPath: process.env.NODE_SSR === 'true' ? '/static/' : '/',
  html: {
    template: `${__dirname}/src/index.ejs`, // HTML 模版文件所在的文件路径
    filename: './index.html', // 输出的 HTML 的文件名称
    favicon: `${__dirname}/public/favicon.ico`,
  }
  extraBabelPlugins: [
    [
      'import', {
        libraryName: 'antd',
        style: "css",
      },
    ]
  ]
}
