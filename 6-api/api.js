const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/healthcheck') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({status: 'ok'}));
  }
});

const port = 1337;

server.listen(port, err => {
  if (err) throw err;
  console.log(`Listening on localhost:${port}`);
});