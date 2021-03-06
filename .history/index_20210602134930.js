const { Console } = require('console');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>
{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

let myVariable = server.httpLock;
console.log(myVariable);
server.listen(port, hostname, () => 
{
  console.log(`Server running at http://${hostname}:${port}/`);
});