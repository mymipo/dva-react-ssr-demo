import { createMemoryHistory } from 'history';
import { renderToString } from 'react-dom/server';
import createApp from './createApp';
import renderFullPage from './fullPage';
import { query } from '../src/services/example';


export default function (req, res) {
  if (req.url === '/') {

  } else if (req.url === '/user') {
    query().then((results) => {
      console.log(results);

      const app = createApp({
        history: createMemoryHistory()
      }, {
        data,
        url: req.url
      });

      const html = renderToString(app.start()({ context }));
      res.end(renderFullPage(html, data));
    }).catch((error) => {
      res.status(500).end(JSON.stringify(error));
    });
  } else {
    res.status(500).end(`Uncaught pathname: ${req.url}`);
  }
}
