// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

// Import custom middleware
const customMiddleware = require('./middleware.cjs'); // Adjust the path if needed

server.use(middleware); // Apply your custom middleware
server.use(middleware); // Add default json-server middleware
server.use(router);

server.listen(5000, () => {
    console.log('JSON Server is running on port 5000');
});
