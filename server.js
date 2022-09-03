// server.js

const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 30001;

// when using middleware `hostname` and `port` must be provided below
const app = next({dev, hostname, port});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on https://${hostname}:${port}`);
  });
});
