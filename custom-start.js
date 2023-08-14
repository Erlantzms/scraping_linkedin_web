const fs = require('fs');
const paths = require('./paths');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const redirectServedPath = require('react-dev-utils/redirectServedPathMiddleware');

function customStart() {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }

  if (fs.existsSync(paths.proxySetup)) {
    require(paths.proxySetup)(devServer.app);
  }

  middlewares.push(
    evalSourceMapMiddleware(devServer),
    redirectServedPath(paths.publicUrlOrPath),
    noopServiceWorkerMiddleware(paths.publicUrlOrPath)
  );

  return middlewares;
}

// Inicia la lógica personalizada
const middlewares = [];
const devServer = {
  app: {} // Puedes ajustar esto según sea necesario
};
customStart();
