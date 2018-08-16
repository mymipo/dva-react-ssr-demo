import { createMemoryHistory } from 'history';
import { renderToString } from 'react-dom/server';
import request from '../src/utils/request';
import createApp from './createApp';
import renderFullPage from './fullPage';

export default function (req, res) {
  if (req.url === '/') {
    const app = createApp({
      history: createMemoryHistory()
    }, {
      url: req.url
    });
    const context = {};

    const html = renderToString(app.start()({ context }));
    res.end(renderFullPage(html, ''));
  } else if (req.url === '/user') {

    request().then((response) => {
      const context = {};

    const app = createApp({
      history: createMemoryHistory()
    }, {
      data: response.data,
      url: req.url
    });

    const html = renderToString(app.start()({ context }));
    res.end(renderFullPage(html, response));
    })
  } else {
    res.status(500).end(`Uncaught pathname: ${req.url}`);
  }
}
