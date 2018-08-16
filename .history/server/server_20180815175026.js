import path from 'path';
import express from 'express';
import ssrMiddleware from './ssrMiddleware';
import compilerConfig from '../config/compiler.config';

const app = express();

global.__SUCCESS__ = compilerConfig.globals.__SUCCESS__;
global.__DEV__ = process.env.ENV_SIGN === 'development';

app.use('/static', express.static(path.join(__dirname, '../dist')));

app.use(ssrMiddleware);

// 删除X-Powered-By响应头
app.disable('x-powered-by');

// error logger
app.on('error', function (err, ctx) {
  console.log('error occured:', err.stack)
});


const server = app.listen(8080, () => {
  const { port } = server.address();
  console.info(`Listened at http://localhost:${port}`);
});
