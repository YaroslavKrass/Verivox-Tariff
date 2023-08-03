const http = require('http');
const app = require('./app/app');

const port = process.env.port || 3000;
const server = http.createServer(app);

console.log(`Server running on port: ${port}`);
server.listen(port);