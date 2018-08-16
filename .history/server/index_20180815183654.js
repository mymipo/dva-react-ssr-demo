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
    ],
    ["import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es", "style": "css"
      }
    ]
  ]
});

// 忽略样式
require('./ignore')();

// css处理
// require('css-modules-require-hook')({
//   extensions: ['.less', 'css'],
//   processorOpts: { parser: require('postcss-less').parse },
//   // generateScopedName: '[local]___[hash:base64:5]'
// });

require('./server');
