import path from 'path';
import express from 'express';
import webpack from 'webpack';
import ssrMiddleware from './ssrMiddleware';
import compilerConfig from '../config/compiler.config';
// import config from '../webpack/webpack.server.config';
// import webpackDevMiddle from 'webpack-dev-middleware';

const app = express();

global.__SUCCESS__ = compilerConfig.globals.__SUCCESS__;
global.__DEV__ = process.env.ENV_SIGN === 'development';

app.use('/static', express.static(path.join(__dirname, '../dist')));

// if (process.env.NODE_ENV !== 'production') {
//   // webpack compile
//   const compiler = webpack(config);
//   // const options = {
//   //   publicPath: config.output.publicPath,
//   //   noInfo: true,
//   //   stats: { colors: true },
//   // };
//   // app.use(webpackDevMiddle(compiler, options));
// }

app.use(ssrMiddleware);

// 删除X-Powered-By响应头
app.disable('x-powered-by');

// error logger
app.on('error', function (err, ctx) {
  console.log('error occured:', err.stack)
});


const server = app.listen(9004, () => {
  const { port } = server.address();
  console.info(`Listened at http://localhost:${port}`);
});
