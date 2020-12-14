require('dotenv').config();
const Server = require('./server');
const initRoutes = require('./routes');

async function bootUp() {
  const server = new Server();
  await server.start();
  initRoutes(server.app);
}

bootUp().then(() => {
  console.log('application is running...');
});
