const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: 8000
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'Hello, Hapi!';
  }
});

async function startServer() {
  try {
    await server.start();
    console.log('Starting server at', server.info.uri);
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

startServer();
