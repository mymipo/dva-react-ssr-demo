require('babel-polyfill');
require('babel-register');

// require('./ignore')();
// 配置别名
// const moduleAlias = require('module-alias')

require('css-modules-require-hook')({
  extensions: '.less',
  camelCase: true,
  rootDir: __dirname,
  processorOpts: { parser: require('postcss-less').parse },
  // generateScopedName: '[local]___[hash:base64:5]'
  generateScopedName: '[local]'
});

require('./server');
