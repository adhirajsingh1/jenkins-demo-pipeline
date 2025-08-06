const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Jenkins Pipeline and Node.js!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
