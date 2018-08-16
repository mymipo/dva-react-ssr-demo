require('babel-register')({
  "presets": [
    "env",
    "stage-0",
    "react"
  ],
  "plugins": [
    ["transform-runtime",
      {
        "polyfill": true,
        "regenerator": true
      }
    ]
  ]
});

// 忽略样式
require('./ignore')();
// 配置别名
// const moduleAlias = require('module-alias')

// require('css-modules-require-hook')({
//   extensions: ['.less', 'css'],
//   processorOpts: { parser: require('postcss-less').parse },
//   // generateScopedName: '[local]___[hash:base64:5]'
// });

require('./server');
